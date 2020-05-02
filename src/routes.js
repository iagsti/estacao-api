const express = require('express');
const routes = express.Router();

const TemperaturaController = require('./Controllers/TemperaturaController');
const UmidadeController = require('./Controllers/UmidadeController');

//API Routes
routes.get('/temperatura/maxima', TemperaturaController.tmax);
routes.get('/temperatura/minima', TemperaturaController.tmin);

routes.get('/umidade/relativa', UmidadeController.umidadeRelativa);

module.exports = routes;