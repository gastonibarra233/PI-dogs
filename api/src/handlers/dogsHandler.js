const { getAllDogs, searchDogByName, getDogById, addDog } = require('../controllers/dogsController');

//obtener todos los perros
const getDogsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const result = name ? await searchDogByName(name) : await getAllDogs();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

//obtener detalle de un perro
const getDogByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const getId = await getDogById(id);
        return res.status(200).json(getId);
    } catch (error) {
        return res.status(404).json({ error: error.message})
    }
}

//crear un Dog
const createDogHandler = async (req, res) => {
    try {
        const newDog = await addDog(req.body)
        res.status(200).json(newDog);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    getDogsHandler,
    getDogByIdHandler,
    createDogHandler
}