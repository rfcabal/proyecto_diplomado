const express = require('express');
const router = express.Router();
const categoriasModel = require('../../models/categoriaModel');
const curriculumModel = require('../../models/curriculumModel');
const entradasModel = require('../../models/entradasModel');

/* GET */
router.get('/categorias', async (req, res, next) => {
  const data = await categoriasModel.getCategorias();
  res.send(data);
});

/* GET */
router.get('/curriculum', async (req, res, next) => {
  const data = await curriculumModel.getCurriculum()
  res.send(data);
});

/* GET */
router.get('/entradas', async (req, res, next) => {
  let data;

  if(req.query.tipo) {
      data = await entradasModel.getEntradasByTipo(req.query.tipo);
      return res.send(data);
  }

  data = await entradasModel.getEntradas();
  return res.send(data);
});

module.exports = router;