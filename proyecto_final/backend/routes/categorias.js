var express = require('express');
var router = express.Router();
var categoriasModel = require('../models/categoriaModel');

/* GET */
router.get('/', async (req, res, next) => {
    var data = await categoriasModel.getCategorias();
    res.send(data);
});

/* DELETE */
router.delete('/:id', async (req, res, next) => {
    var data = await categoriasModel.deleteCategoria(req.params.id);
    res.send(data);
});

module.exports = router;