const express =  require('express');
const router = express.Router();
const curriculumModel = require('../../models/curriculumModel');
const categoriasModel = require('../../models/categoriaModel');
const entradasModel = require('../../models/entradasModel');
const cloudinary =  require('cloudinary').v2;

router.get('/', async (req, res, next) => {

    const curriculum = await curriculumModel.getCurriculum();
    const categorias = await categoriasModel.getCategorias();
    let imagen = '';

    const experiencias = await entradasModel.getEntradasByTipo(categorias[0].nombre);
    const cursos = await entradasModel.getEntradasByTipo(categorias[1].nombre);
    const certificaciones = await entradasModel.getEntradasByTipo(categorias[2].nombre);
    const portafolios = await entradasModel.getEntradasByTipo(categorias[3].nombre);
    const blogs = await entradasModel.getEntradasByTipo(categorias[4].nombre);

    if(curriculum.foto) {
        imagen = cloudinary.image(curriculum.foto, {
            width: 100,
            height: 100,
            crop: 'fill'
        })
    }

    res.render('admin/home', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        curriculum: curriculum,
        experiencias,
        cursos,
        certificaciones,
        portafolios,
        blogs,
        imagen
    });
});

module.exports =  router;