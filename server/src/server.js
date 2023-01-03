const http = require('http');
const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');

//server config
const app = require('./app');
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const DB = process.env.DB || 'mongodb://127.0.0.1:27017/cafa-menu';

//database connection
mongoose.connection.once('open', () => {
    console.log('Connected to DB...');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to DB: ', err);
});

//server first actions
server.listen(PORT, async () => {

    mongoose.set('strictQuery', false);
    await mangoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    });

    console.log(`app is running on port ${PORT}...`);
});