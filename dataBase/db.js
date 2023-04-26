const mongoose = require('mongoose')

mongoose.set('strictQuery', true) 
require('dotenv').config() 
const connect = async () => {

    try {
        
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("base de datos ON")

    } catch (error) {

        console.log("no se pudo conectar con la base de datos")
    }
}

module.exports = {connect}


