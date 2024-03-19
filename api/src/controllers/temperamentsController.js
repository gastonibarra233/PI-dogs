const axios = require('axios')
require('dotenv').config()
const { URL_API, API_KEY } = process.env
const { Temperament } = require('../db')

//agregar temperamentos de la API a la DB
const addTemperaments = async () => {
    const { data } = await axios(`${URL_API}/?api_key=${API_KEY}`);
    const allTemperaments = data.map(dog => dog.temperament);

    allTemperaments.forEach(temperament => {
        if (temperament) {
            let temperamentsArr = temperament.split(',');
            temperamentsArr.forEach(temp => {
                Temperament.findOrCreate({
                    where: {
                        name: temp.trim()
                    }
                })
            })
        }
    })
}
addTemperaments();

const getTemperaments = async () => {
    return await Temperament.findAll();
}

module.exports = getTemperaments;