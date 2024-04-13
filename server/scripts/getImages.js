const axios = require('axios')
const fs = require('fs')
const path = require('path')
const pizzas = require('../data/pizzaNames')

// Ваш ключ доступа к Pexels API
const apiKey = 'tfQdXV41RzsYWBSVgrAh1p7FPYbx5EAEJtJn2BsYWHgp4WMUUPzHQyg4'

// Функция для скачивания фото
async function downloadImage(imageUrl, filename) {
    const response = await axios.get(imageUrl, { responseType: 'stream' })
    const writer = fs.createWriteStream(filename)
    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
}

// Функция для выполнения поиска и скачивания фото
async function searchAndDownload(query) {
    try {
        const response = await axios.get(`https://api.pexels.com/v1/search`, {
            headers: {
                Authorization: apiKey,
            },
            params: {
                query,
                per_page: 1, // Количество результатов на страницу
            },
        })

        const photos = response.data.photos

        if (photos.length > 0) {
            const firstImageUrl = photos[0].src.original
            const filename = path.join(__dirname, `${query}.jpg`)
            await downloadImage(firstImageUrl, filename)
            console.log(`Фото для запроса "${query}" успешно скачано.`)
        } else {
            console.log(`Для запроса "${query}" не найдено результатов.`)
        }
    } catch (error) {
        console.error(`Ошибка для запроса "${query}":`, error)
    }
}

// Проход по массиву поисковых запросов и выполнение поиска и скачивания
pizzas.forEach(async (pizza) => {
    const query = `Пицца ${pizza.ru}`
    await searchAndDownload(query)
})
