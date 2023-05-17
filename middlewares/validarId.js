const { Producto } = require('../models/farmaciaModel');

const validar = async (req, res, next) => {
    try {
        const listadoFarmacia = await Producto.findById(req.params.id);
        if (listadoFarmacia !== null) {
            next();
        } else {
            res.status(500).json({ msg: "Invalid ID" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { validar };
