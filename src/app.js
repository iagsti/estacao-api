const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const auth = require('./auth')();

const app = express();

const corsOptions = {
    origin: 'localhost'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(auth.initialize());


module.exports = app;