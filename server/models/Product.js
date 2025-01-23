const mongoose = require('mongoose')
const ProductSchema = new mongoose.MongooseSchema({
    brand: String,
    sae: String,
    gamma: String
},{timestamps: true})

const Product = mongoose.model('Product',ProductSchema)

module.exports = Product