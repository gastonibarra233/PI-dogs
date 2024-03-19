const getTemperaments = require('../controllers/temperamentsController');

//obtener temperamentos
const temperamentsHandler = async (req, res) => {
    try {
        const allTemperaments = await getTemperaments();
        res.status(200).json(allTemperaments)
    } catch (error) {
        res.status(404).json({ error: error.message });        
    }
}

module.exports = temperamentsHandler;