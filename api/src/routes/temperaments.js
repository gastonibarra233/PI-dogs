const { Router } = require('express');
const routerTemperaments = Router();

//Handlers
const temperamentsHandler = require('../handlers/temperamentsHandler');

//rutas
//obtener temperamentos
routerTemperaments.get('/', temperamentsHandler);

module.exports = routerTemperaments;