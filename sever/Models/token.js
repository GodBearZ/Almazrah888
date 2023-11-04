const mongoose = require('mongoose')

const TokenSchema = mongoose.Schema({
    Quantity:Number
},{timestamps:true})

module.exports = mongoose.model('token',TokenSchema)