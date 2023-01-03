const express = require('express');
const middleware = express.Router();
const cors = require('cors');
const formData = require('./formData.middleware');

//middlewares
middleware.use(formData);
middleware.use(express.urlencoded());
middleware.use(cors());
middleware.use(express.json());

module.exports = middleware;