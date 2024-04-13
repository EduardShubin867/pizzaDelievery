const mongoose = require('mongoose')
const Topping = require('../models/Topping')
const toppings = require('../data/toppings')

mongoose
    .connect('mongodb://localhost:27017/pizzaDelivery', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err))

Topping.insertMany(toppings)
    .then(() => {
        console.log('Toppings successfully added to the database')
        mongoose.connection.close()
    })
    .catch((error) => {
        console.error('Error adding toppings to the database:', error)
        mongoose.connection.close()
    })
