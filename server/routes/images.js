const express = require('express')
const router = express.Router()

const path = require('path')

router.get('/image/pizzas/:filename', (req, res) => {
    let filename = req.params.filename
    let filepath = path.join(__dirname, '..', 'images', 'pizzas', filename)
    res.sendFile(filepath)
})

module.exports = router
