const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const cloudinary =  require('cloudinary').v2;

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

  if(data.foto) {
      data.imagen = cloudinary.url(data.foto, {
        crop: 'fill'
      })
  }

  res.send(data);
});

/* GET */
router.get('/entradas', async (req, res, next) => {
  let data;

  if(req.query.tipo) {
    data = await entradasModel.getEntradasByTipo(req.query.tipo);
  } else if(req.query.id) {
    data =  await entradasModel.getEntradasById(req.query.id)
  } else {
    data = await entradasModel.getEntradas();
  }

  if(Array.isArray(data)) {
    data.map(item => {
      if(item.media) {
          item.imagen = cloudinary.url(item.media, {
            width: 200,
            height: 200,
            crop: 'fill'
          })
      }
    })
  } else {
    if(data.media) {
        data.imagen = cloudinary.url(data.media, {
          width: 200,
          height: 200,
          crop: 'fill'
        })
    }
  }

  res.send(data);
});

/* POST */
router.post('/contacto', async (req, res, next) => {
  const { nombre, email, mensaje, telefono } = req.body;

  const mail = {
    to: "rf.cabal@gmail.com",
    subject: "Contacto Web",
    html: `${nombre} se contacto a traves de la web y quiere mas informacion a este correo: ${email}
    <br> Además, hizo el siguiente comentario: ${mensaje} <br> Su tel es: ${telefono}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASSWORD
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: "Mensaje Enviado"
  })
});


module.exports = router;