const { Router } = require('express');
const routerDogs = Router();

//Handlers
const { getDogsHandler, getDogByIdHandler, createDogHandler } = require('../handlers/dogsHandler');

//obtener todas las razas
routerDogs.get('/', getDogsHandler);

//obtener detalle
routerDogs.get('/:id', getDogByIdHandler);

//crear nuevo Dog
routerDogs.post('/', createDogHandler);

module.exports = routerDogs;