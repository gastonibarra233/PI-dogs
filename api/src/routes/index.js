const { Router } = require('express');
const router = Router();

const routerDogs = require('./dogs');
const routerTemperaments = require('./temperaments')

router.use('/dogs', routerDogs);
router.use('/temperaments', routerTemperaments);

module.exports = router;
