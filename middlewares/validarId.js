const {Producto} = require ('../models/farmaciaModel');
const validar = async (req, res, next) => {

    try {
          
const listadoFarmacia = await Producto.findById(req.params.id)
if (Producto !== null) {
next();
}else {
    res.status(500).json({msg: "id invalido"});

}
   
    } catch (error) {
res.status(500).json(error)
}}

module.exports = { validar }