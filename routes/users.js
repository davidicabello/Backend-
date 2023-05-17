const express = require('express')
const userRouter = express.Router()
const controller = require('../controllers/usersControllers')
const { validar } = require('../middlewares/validarId')
const checks = require('../middlewares/checks')
const { validarChecks } = require('../middlewares/validarChecks')




//http://localhost:8080/
userRouter.get('/ver', controller.listar)

userRouter.post('/crear', checks, validarChecks, controller.crear)

userRouter.get('/ver/:id', validar, checks, controller.buscarPorId)

userRouter.get('/buscar/:remedio', controller.buscarPorNombre)

userRouter.put('/editar/:id', validar, controller.editar)

userRouter.delete('/eliminar/:id', validar, controller.eliminar)
//metodo http - url - mildware - callback


module.exports = userRouter


