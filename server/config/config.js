const mongoose = require('mongoose')
require('dotenv').config()


const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
       
          
            serverSelectionTimeoutMS: 30000 // Aumenta el tiempo de espera a 30 segundos
          })
        console.log("mongo is working")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection