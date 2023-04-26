const mongoose = require('mongoose')
const { Schema } = mongoose;

const farmaciaSchema = new Schema({

    remedio: { 
        type: String, 
        required: true
     },
    descripcion: { 
        type: String, 
        required: true 
    },
    precio: { 
        type: Number, 
        required: true 
    },
    stock: { 
        type: Number, 
        required: true 
    },

    faltante: {
        type: Boolean, 
        required: true 
    },
    
    img: {
        type: String, 
         
    },


})


/**creacion del modelo a partir del Schema*/
const Producto = mongoose.model('Farmacia', farmaciaSchema)

//exportamos el modelo
module.exports = { Producto }
