var express =  require('express');
var router = express.Router();
var entradasModel = require('../../models/entradasModel');
var categoriasModel = require('../../models/categoriaModel');

/* GET */
router.get('/:accion/:id', async (req, res, next) => {
    let entrada;
    let accion = req.params.accion;

    const categorias = await categoriasModel.getCategorias();

    if(accion === 'modificar') {
        entrada = await entradasModel.getEntradasById(req.params.id);
    }

    res.render('admin/accion', {
        layout: 'admin/layout',
        entrada,
        categorias,
        accion
    });
});

router.get('/:accion', async (req, res, next) => {
    let entrada;
    let accion = req.params.accion;

    const categorias = await categoriasModel.getCategorias();

    if(accion === 'modificar') {
        entrada = await entradasModel.getEntradasById(req.params.id);
    }

    res.render('admin/accion', {
        layout: 'admin/layout',
        entrada,
        categorias,
        accion
    });
});

module.exports =  router;