const express = require('express')
const router = express.Router()
const ProductController = require('../constrollers/ProductController.js')

router.post('/create',ProductController.post)

router.get('/',ProductController.get)

router.get('/id/:_id',ProductController.getById)

router.put('/id/:_id',ProductController.put)

router.delete('/id/:_id',ProductController.delete)

module.exports = router
