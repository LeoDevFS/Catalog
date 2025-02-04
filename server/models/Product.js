const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    brand: String,
    sae: String,
    gamma: String,
    subname:String,
    approval:Array,
    format:Number,
    price:Number

},{timestamps: true})

const Product = mongoose.model('Product',ProductSchema)

module.exports = Product