const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

// Routes
app.use(require('./routes/index'));

module.exports = app;