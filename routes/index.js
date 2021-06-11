const express = require('express');
const routes = express.Router();
const { sendEmail } = require('../controllers/emailControllers');
const { honeypot, origin } = require('../middleware');

routes.post('/emails', origin, honeypot, sendEmail);

module.exports = routes;