const express =  require('express');
const router = express.Router();
const entradasModel = require('../../models/entradasModel');
const categoriasModel = require('../../models/categoriaModel');
const cloudinary =  require('cloudinary').v2;

/* GET */
router.get('/:accion/:id', async (req, res, next) => {
    let entrada;
    let imagen;
    let accion = req.params.accion;
    const categorias = await categoriasModel.getCategorias();

    if(accion === 'modificar') {
        entrada = await entradasModel.getEntradasById(req.params.id);
    }

    if(entrada.media) {
        imagen = cloudinary.image(entrada.media, {
            width: 100,
            height: 100,
            crop: 'fill'
        })
    }

    res.render('admin/accion', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        entrada,
        categorias,
        accion,
        imagen
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
        usuario: req.session.nombre,
        entrada,
        categorias,
        accion
    });
});

module.exports =  router;