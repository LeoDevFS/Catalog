const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')

router.post('/create',async(req,res)=>{
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
})

router.get('/',async(req,res) => {
    try {
        const products= await Product.find()
        res.json(products)
    } catch (error) {
        console.log(error)
    }
})

router.get('/id/:_id',async(req,res)=>{
    try {
        const product = await Product.findById(req.params._id)
        res.json(product)
    } catch (error) {
        console.log(error)
    }
})

router.put('/id/:_id',async(req,res)=>{
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
        
    }
})

router.delete('/id/:_id',async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params._id)
        res.json({mensaje: "producto Borrado",product})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
