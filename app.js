const express = require('express');
const app = express();
const logger = require('morgan');

const cors = require('cors');
const userRouter = require('./routes/users.js');
const indexRoutes = require('./routes/index.js');
const { connect } = require('./dataBase/db.js');

app.use(express.json());
app.use('/home', userRouter);
app.use('/', indexRoutes);

app.use(logger('dev'));

app.use(cors());
connect();

module.exports = app;
