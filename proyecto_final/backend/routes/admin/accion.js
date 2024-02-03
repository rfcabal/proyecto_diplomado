var express =  require('express');
var router = express.Router();
var entradasModel = require('../../models/entradasModel');

/* GET */
router.get('/:accion/:id', async (req, res, next) => {
    let entrada;
    let accion = req.params.accion;

    if(accion === 'modificar') {
        entrada = await entradasModel.getEntradasById(req.params.id);
    }

    res.render('admin/accion', {
        layout: 'admin/layout',
        entrada,
        accion
    });
});

router.get('/:accion', async (req, res, next) => {
    let entrada;
    let accion = req.params.accion;

    if(accion === 'modificar') {
        entrada = await entradasModel.getEntradasById(req.params.id);
    }

    res.render('admin/accion', {
        layout: 'admin/layout',
        entrada,
        accion
    });
});

module.exports =  router;