const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')

router.post('/create',async(req,res)=>{
    try {
        const productBrand = req.body.brand;
        const productSae = req.body.sae;
        const productGamma = req.body.gamma
        const product = new Product({
            brand:productBrand,
            sae:productSae,
            gamma:productGamma,
        })
        await product.save()
        res.status(201)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
