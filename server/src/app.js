const express = require('express');
const path = require('path');
const app = express();

// middlewares
const middleware = require('./middleware/routers.middleware');
app.use(middleware);

// routers
const api = require('./api/v1/api.routers');
app.use('/api/v1', api);

// static files
app.use(express.static(path.join(__dirname, '../', 'public')));
app.get('/*', (req, res) => {
    app.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;