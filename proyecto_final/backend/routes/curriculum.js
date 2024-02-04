var express = require('express');
var router = express.Router();
var curriculumModel = require('../models/curriculumModel');

/* GET */
router.get('/', async (req, res, next) => {
    var data = await curriculumModel.getCurriculum()
    res.send(data[0]);
});

/* POST Modificar */
router.post('/modificar', async (req, res, next) => {
    const { id, introduccion, correo, telefono} = req.body;
    const obj= {
        introduccion,
        correo,
        telefono
    }

    await curriculumModel.modifyCurriculum(id, obj);

    res.redirect('/admin/home')
});

module.exports = router;
