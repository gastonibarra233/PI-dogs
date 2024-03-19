const axios = require('axios')
require('dotenv').config();

const { URL_API, API_KEY } = process.env;

const { Dog, Temperament } = require('../db');

//obtener razas de perros desde API
const getApiDogs = async () => {
    //lista de perros API
    const { data } = await axios(`${URL_API}/?api_key=${API_KEY}`);
    const apiDogs = data.map(dog => {
        let [minWeight, maxWeight] = dog.weight.metric.split('-')
        let [minHeight, maxHeight] = dog.height.metric.split('-')

        return {
            id: dog.id,
            name: dog.name,
            minHeight: Number(minHeight),
            maxHeight: Number(maxHeight),
            minWeight: Number(minWeight),
            maxWeight: Number(maxWeight),
            lifespanYears: dog.life_span,
            temperaments: dog.temperament,
            image: dog.image.url
        }
    });

    return apiDogs;
}


//obtener razas de perros desde DB
const getDbDogs = async () => {
    //lista de perros DB
    const dbDogs = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: []
            }
        },
        order: [['createdAt', 'DESC']]
    });

    const dbDogsFormat = dbDogs.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            minHeight: dog.minHeight,
            maxHeight: dog.maxHeight,
            minWeight: dog.minWeight,
            maxWeight: dog.maxWeight,
            lifespanYears: dog.life_span,
            temperaments: (dog.Temperaments.map(temp => temp.name)).join(', '),
            image: dog.image
        }
    })
    return dbDogsFormat;
}


//unión raza de perros API y DB
const getAllDogs = async () => {
    const apiDogs = await getApiDogs();
    const dbDogs = await getDbDogs();
    return [...dbDogs, ...apiDogs ]
}


//buscar por nombre de raza
const searchDogByName = async (name) => {
    const allDogs = await getAllDogs();
    const searchDog = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
    if (searchDog.length === 0) throw new Error("Dog not found")
    return searchDog;
}

//obtener detalle perro por ID
const getDogById = async (id) => {
    const allDogs = await getAllDogs();
    const dog = allDogs.find(d => d.id.toString() === id.toString())

    // en el caso de que no exista ese ID
    if (!dog) throw new Error(`No existe el perro con id: ${id}`);
    return dog;
}


//Crear nuevo perro
const addDog = async (data) => {
    const { name, minHeight, maxHeight, minWeight, maxWeight, lifespanYears, image, temperaments } = data;
    const found = await Dog.findOne({ where: { name } });
    if (!name || !minHeight || !maxHeight || !minWeight || !maxWeight || !lifespanYears || !image || !temperaments) throw new Error('Faltan datos');
    if (temperaments.length === 0) throw new Error('Agrega por lo menos 1 temperamento');
    if (found) throw new Error('Esta raza ya existe');

    const newDog = {
        name,
        minHeight,
        maxHeight,
        minWeight,
        maxWeight,
        lifespanYears,
        image
    };

    const addNewDog = await Dog.create(newDog);
    temperaments.forEach(async (temp) => {
        let temperamentsDB = await Temperament.findAll({
            where: { name : temp }
        })
        await addNewDog.addTemperament(temperamentsDB);
    });

    return addNewDog;
}

module.exports = {
    getAllDogs,
    searchDogByName,
    getDogById,
    addDog
}