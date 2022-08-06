const mongoose = require('mongoose');
require('dotenv').config();

const LOCAL_URI = 'mongodb://127.0.0.1:27017/gorillazDatabase';
const MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || LOCAL_URI;

/* 
    uri = uniform resource identifier = sequence of characters that distinguishes one resource from another.
    mongoose.connect(uri, options, cb)
*/

// mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(e => console.error('Connection error', e.message));

const db = mongoose.connection;

module.exports = db;
