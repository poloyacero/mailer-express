require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  "origin": ['http://stouge.dk', 'http://www.nolimitsolution.dk'],
  "methods": 'POST',
  "preflightContinue": false,
  "optionsSuccessStatus": 200
}));
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index');
//routes
app.use('/api/v1', routes);

module.exports = app;