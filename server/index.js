const express = require('express')
const app = express()
const PORT = 3000
const dbConnection = require('../config/config')
const productRoutes = require('./routes/routes')

app.listen(PORT,()=>{
    console.log(`express is working on http://localhost:${PORT}`)
})

dbConnection()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',productRoutes)

