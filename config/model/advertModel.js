const mongoose = require('mongoose')

const advertSchema = mongoose.Schema({
    id: Number,
    address: String,
    link: String,
    price: Number
    })

module.exports = mongoose.model('Advert',advertSchema)