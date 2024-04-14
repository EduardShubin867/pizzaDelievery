const express = require('express')
const router = express.Router()
const Pizza = require('../models/Pizza')

router.get('/', async (req, res) => {
    console.log(req.query)
    const { page = 1, limit = 12 } = req.query
    try {
        const pizzas = await Pizza.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec()
        res.json(pizzas)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router
