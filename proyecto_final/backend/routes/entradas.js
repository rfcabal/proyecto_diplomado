var express = require('express');
var router = express.Router();
var entradasModel = require('../models/entradasModel');

/* GET */
router.get('/', async (req, res, next) => {
    var data = await entradasModel.getEntradas()
    res.send(data);
});

/* POST Nuevo */
router.post('/nuevo', async (req, res, next) => {
    const {titulo, tiempo, texto} = req.body;

    await entradasModel.addEntrada(titulo, tiempo,texto);

    res.redirect('/admin/home')
});

/* POST Modificar */
router.post('/modificar', async (req, res, next) => {
    const { id, titulo, tiempo, texto} = req.body;
    const obj= {
        titulo,
        tiempo,
        texto
    }

    await entradasModel.modifyEntrada(id, obj);

    res.redirect('/admin/home')
});

/* DELETE */
router.get('/eliminar/:id', async (req, res, next) => {
    await entradasModel.deleteEntradas(req.params.id);
    res.redirect('/admin/home')
});

module.exports = router;