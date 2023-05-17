const { check } = require('express-validator')
const checks = [

    check('remedio')
        .not().isEmpty().withMessage('el campo remedio es requerido')
        .isString().withMessage('el campo remedio debe ser un string'),

    check('descripcion')
        .not().isEmpty().withMessage('el campo descripcion es requerido')
        .isString().withMessage('el campo descripcion debe ser un string'),

    check('precio')
        .not().isEmpty().withMessage('el campo precio es requerido')
        .isNumeric().withMessage('el campo precio debe ser un number'),

    check('stock')
        .not().isEmpty().withMessage('el campo stock es requerido')
        .isNumeric().withMessage('el campo stock debe ser un number'),

    check('faltante')
        .not().isEmpty().withMessage('el campo faltante  es requerido')
        .isBoolean().withMessage('el campo stock debe ser un booleano'),

]
module.exports = checks