var express = require('express');
var router = express.Router();
var entradasModel = require('../models/entradasModel');

/* GET */
router.get('/', async (req, res, next) => {
    var data = await entradasModel.getEntradas()
    res.send(data);
});

/* DELETE */
router.delete('/:id', async (req, res, next) => {
    var data = await entradasModel.deleteEntradas(req.params.id);
    res.send(data);
});

module.exports = router;