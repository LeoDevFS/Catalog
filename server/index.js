const express = require('express')
const app = express()
const PORT = 3000
const dbConnection = require('./config/config.js')
const productRoutes = require('./routes/routes.js')
const cors = require ("cors")


app.use(cors())
app.listen(PORT,()=>{
    console.log(`express is working on http://localhost:${PORT}`)
})

dbConnection()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',productRoutes)

