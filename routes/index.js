const express = require("express");
const indexRouter = express.Router();
const { index } = require('../controllers/indexControllers');

indexRouter.get('/', index);

module.exports = indexRouter;