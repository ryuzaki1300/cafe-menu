const express = require('express');
const info = express.Router();
const infoController = require('./info.controller');

info.use('/', infoController);

module.exports = info;