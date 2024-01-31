var express = require('express');
var router = express.Router();
var curriculumModel = require('../models/curriculumModel');

/* GET */
router.get('/', async (req, res, next) => {
    var data = await curriculumModel.getCurriculum()
    res.send(data[0]);
});

/* POST */
router.post('/', async (req, res, next) => {
    var data = await curriculumModel.addCurriculum(req.body.introduccion, req.body.correo, req.body.telefono);
    res.send(data);
});

/* PUT */
router.put('/:id', async (req, res, next) => {
    var data = await curriculumModel.modifyCurriculum(req.params.id, req.body.curriculum);
    res.send(data);
});


/* DELETE */
router.delete('/:id', async (req, res, next) => {
    var data = await curriculumModel.deleteCurriculum(req.params.id);
    res.send(data);
});

module.exports = router;
