const mongoose = require('mongoose')
const Pizza = require('../models/Pizza')
const pizzaNames = require('../data/pizzaNames')
const categories = require('../data/pizzaCategories')
const descriptions = require('../data/pizzaDescriptions')

mongoose.connect('mongodb://localhost:27017/pizzaDelivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const pizzaData = pizzaNames.map((name, index) => {
    const category = categories[index % categories.length]
    let isSpicy = false
    let isVegetarian = false
    let isVegan = false
    const randomNumber = Math.floor(Math.random() * 19) + 1

    switch (category) {
        case 'Острые':
            isSpicy = true
            break
        case 'Вегетарианские':
            isVegetarian = true
            break
        case 'Веганские':
            isVegetarian = true
            isVegan = true
            break
    }

    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length)
        return array[randomIndex]
    }

    return {
        name: name.ru,
        description: `${name.ru} ${getRandomElement(descriptions)}`,
        price: Math.floor(Math.random() * 10) + 10,
        image: `pizza_${randomNumber}`,
        sizes: [
            { name: 'Маленькая', price: Math.floor(Math.random() * 5) + 5 },
            { name: 'Средняя', price: Math.floor(Math.random() * 5) + 10 },
            { name: 'Большая', price: Math.floor(Math.random() * 5) + 15 },
        ],
        category,
        isSpicy,
        isVegetarian,
        isVegan,
        rating: Math.random() * 5,
        numReviews: Math.floor(Math.random() * 100),
        reviews: [
            {
                name: 'Иван Иванов',
                rating: Math.floor(Math.random() * 5) + 1,
                comment: 'Отличная пицца!',
                user: new mongoose.Types.ObjectId(),
            },
        ],
    }
})

Pizza.insertMany(pizzaData)
    .then(() => {
        console.log('Данные успешно инициализированы')
        mongoose.connection.close()
    })
    .catch((error) => {
        console.error('Ошибка при инициализации данных:', error)
        mongoose.connection.close()
    })
