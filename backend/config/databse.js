const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb+srv://admin:68146814@ecomm.0hw837l.mongodb.net/MiniProject').on('open', () => {
    console.log('MongoDb Connected Suceessfully');
}).on('error', () => {
    console.log('MongoDb Connection Error');
});

module.exports = connection;