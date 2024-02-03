var express =  require('express');
var router = express.Router();
var curriculumModel = require('../../models/curriculumModel');
var categoriasModel = require('../../models/categoriaModel');
var entradasModel = require('../../models/entradasModel');

router.get('/', async (req, res, next) => {

    const curriculum = await curriculumModel.getCurriculum();
    const categorias = await categoriasModel.getCategorias();
    
    const experiencias = await entradasModel.getEntradasByTipo(categorias[0].nombre);
    const cursos = await entradasModel.getEntradasByTipo(categorias[1].nombre);
    const certificaciones = await entradasModel.getEntradasByTipo(categorias[2].nombre);
    const portafolios = await entradasModel.getEntradasByTipo(categorias[3].nombre);


    res.render('admin/home', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        curriculum: curriculum[0],
        experiencias,
        cursos,
        certificaciones,
        portafolios
    });
});

module.exports =  router;