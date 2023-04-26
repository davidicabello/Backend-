const {Producto} = require('../models/farmaciaModel')
const axios = require("axios");


class Controller {

async crear (req,res) {

    try {
            const productoAguardar = new Producto (req.body);
            await productoAguardar.save();
            res.status(200).json (productoAguardar);

    } catch (error) {
        res.status(501).json({msg : `error al guardar producto`, error})
    }
}

async listar (req,res) {

    try {
        const Productos = await axios.get(
          "https://api.mercadolibre.com/sites/MLC/search?q="  
        );
        res.status(200).json({
          productos: Productos.data,
          message: "Se visualizan todos los productos",
        });
      } catch (error) {
        res.status(500).json({
          productos: null,
          message: `Error: ${error.message}`,
        });
      }

}
async buscarPorId (req,res) {

   
    const listadoFarmacia = await Producto.findById(req.params.id);
    res.status(200).json(listadoFarmacia);
}

async buscarPorNombre (req, res) {

   
    const listadoFarmacia = await Producto.findOne({remedio: req.params.remedio});
    res.status(200).json(listadoFarmacia);
}


async editar (req,res){   
  
            await Producto.findByIdAndUpdate(req.params.id, req.body)
            res.status(202).json({mge:"producto actualizado"})

}
async eliminar (req,res) {
     await Producto.findByIdAndDelete(req.params.id)
    res.json({msg:"el producto " + req.params.id + "ha sido eliminado"})
}
}

module.exports = new Controller


