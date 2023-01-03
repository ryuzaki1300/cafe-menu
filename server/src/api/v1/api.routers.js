const express = require('express');
const api = express.Router();

// import routers
const info = require('./info/info.routers');

// routers
api.use('/info', info);

api.use('/', (req, res) => {
    res.json({
        status: 200,
        message: '@TODO API v1 Documentation'
    });
});

module.exports = api;