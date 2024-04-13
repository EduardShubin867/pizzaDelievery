const mongoose = require('mongoose')

const pizzasSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    sizes: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
        },
    ],
    toppings: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
        },
    ],
    category: { type: String, required: true },
    isVegetarian: { type: Boolean, required: true },
    isVegan: { type: Boolean, required: true },
    isSpicy: { type: Boolean, required: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    reviews: [
        {
            name: { type: String, required: true },
            rating: { type: Number, required: true },
            comment: { type: String, required: true },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User',
            },
        },
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const Pizza = mongoose.model('Pizza', pizzasSchema)

module.exports = Pizza
