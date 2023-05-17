const { Producto } = require('../models/farmaciaModel');
const axios = require("axios");

class Controller {
  async crear(req, res) {
    try {
      const productoAguardar = new Producto(req.body);
      await productoAguardar.save();
      res.status(200).json(productoAguardar);
    } catch (error) {
      res.status(501).json({ msg: "Error al guardar producto", error });
    }
  }

  async listar(req, res) {
    try {
      const productos = await axios.get("https://api.mercadolibre.com/sites/MLC/search?q=");
      res.status(200).json({
        productos: productos.data,
        message: "Se visualizan todos los productos",
      });
    } catch (error) {
      res.status(500).json({
        productos: null,
        message: `Error: ${error.message}`,
      });
    }
  }

  async buscarPorId(req, res) {
    try {
      const listadoFarmacia = await Producto.findById(req.params.id);
      if (listadoFarmacia) {
        res.status(200).json(listadoFarmacia);
      } else {
        res.status(404).json({ msg: "Producto no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error al buscar producto por ID", error });
    }
  }

  async buscarPorNombre(req, res) {
    try {
      const listadoFarmacia = await Producto.findOne({ remedio: req.params.remedio });
      if (listadoFarmacia) {
        res.status(200).json(listadoFarmacia);
      } else {
        res.status(404).json({ msg: "Producto no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error al buscar producto por nombre", error });
    }
  }

  async editar(req, res) {
    try {
      const updatedProducto = await Producto.findByIdAndUpdate(req.params.id, req.body);
      if (updatedProducto) {
        res.status(202).json({ msg: "Producto actualizado" });
      } else {
        res.status(404).json({ msg: "Producto no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error al editar producto", error });
    }
  }

  async eliminar(req, res) {
    try {
      const deletedProducto = await Producto.findByIdAndDelete(req.params.id);
      if (deletedProducto) {
        res.json({ msg: `El producto ${req.params.id} ha sido eliminado` });
      } else {
        res.status(404).json({ msg: "Producto no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error al eliminar producto", error });
    }
  }
}

module.exports = new Controller();
