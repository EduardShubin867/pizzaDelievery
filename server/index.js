const express = require('express')
const mongoose = require('mongoose')
const pizzaRoutes = require('./routes/pizzas')
const toppingRoutes = require('./routes/toppings')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

mongoose
    .connect('mongodb://localhost:27017/pizzaDelivery', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log(`MongoDB Connected: ${mongoose.connection.db.databaseName}`)
    )
    .catch((err) => console.log(err))

app.use(express.json())

app.use('/pizzas', pizzaRoutes)
app.use('/toppings', toppingRoutes)

app.listen(port, () => {
    console.log(`-----------------------------------------------------
Server is running on port ${port}
-----------------------------------------------------`)
})
