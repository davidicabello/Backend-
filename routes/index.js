const express = require ("express")
const router = express.Router()
const {index} = require ('../controllers/indexControllers')
const indexRouter = express.Router()

router.get('/', index)

module.exports = router