const express = require('express');
const auth = require('./auth')();
const routes = express.Router();


const AuthController = require('./Controllers/AuthController');
const TemperaturaController = require('./Controllers/TemperaturaController');
const UmidadeController = require('./Controllers/UmidadeController');

//API Routes
routes.post('/token', AuthController.token);

routes.get('/temperatura/maxima', auth.authenticate(), TemperaturaController.tmax);
routes.get('/temperatura/minima', auth.authenticate(), TemperaturaController.tmin);

routes.get('/umidade/relativa', auth.authenticate() ,UmidadeController.umidadeRelativa);

module.exports = routes;