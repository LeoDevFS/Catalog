const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    brand: String,
    sae: String,
    gamma: String,
    subname:String,
    liters:Number,
    price:Number,
    approval:Array,

},{timestamps: true})

const Product = mongoose.model('Product',ProductSchema)

module.exports = Product