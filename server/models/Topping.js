const mongoose = require('mongoose')

const toppingSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    ru: { type: String, required: true },
    en: { type: String, required: true },
    price: { type: Number, required: true },
})

const Topping = mongoose.model('Topping', toppingSchema)

module.exports = Topping
