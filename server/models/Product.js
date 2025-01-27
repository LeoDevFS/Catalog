const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    brand: String,
    sae: String,
    gamma: String,
    subname:String,
    approval:Array,
    price:String

},{timestamps: true})

const Product = mongoose.model('Product',ProductSchema)

module.exports = Product