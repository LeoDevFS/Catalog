const Product = require('../models/Product.js')

const ProductController = {
    async get (req,res) {
        try {
            const products= await Product.find()
            res.json(products)
        } catch (error) {
            console.log(error)
        }
    },

    async post(req,res){
        try {
            const productBrand = req.body.brand;
            const productSae = req.body.sae;
            const productGamma = req.body.gamma
            const productSubname = req.body.subname
            
            const product = new Product({
                brand:productBrand,
                sae:productSae,
                gamma:productGamma,
                subname:productSubname
            })
            await product.save()
            res.status(201).json(product)
        } catch (error) {
            console.log(error)
        }
    },

    async getById(req,res){
        try {
            const product = await Product.findById(req.params._id)
            res.json(product)
        } catch (error) {
            console.log(error)
        }
    },

    async put(req,res){
        try {
            const idProduct = req.params._id
            const brand = req.body.brand
            const sae = req.body.sae
            const gamma= req.body.gamma
            const subname = req.body.subname
    
            const product = await Product.findByIdAndUpdate(
                idProduct,{
                    brand,
                    gamma,
                    sae,
                    subname
                },{new:true}
            )
            res.json(product)
        } catch (error) {
            console.log(error)
        }
    },

    async delete(req,res){
        try {
            const product = await Product.findByIdAndDelete(req.params._id)
            res.json({mensaje: "producto Borrado",product})
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = ProductController