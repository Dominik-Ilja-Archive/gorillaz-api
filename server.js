const db = require('./db');
const express = require('express');
const routes = require('./routes');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/api', routes);
db.on('error', console.error.bind(console, 'MongoDb connection error:'));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
