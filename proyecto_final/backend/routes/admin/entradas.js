const express = require('express');
const router = express.Router();
const util =  require('util');
const cloudinary =  require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);
const entradasModel = require('../../models/entradasModel');

/* POST Nuevo */
router.post('/nuevo', async (req, res, next) => {
    const {titulo, tiempo, texto, tipo} = req.body;
    let img_id;

    try {
        if(req.files && Object.keys(req.files).length > 0) {
            const imagen = req.files.media;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        await entradasModel.addEntrada(titulo, tiempo, texto, img_id, tipo);
        res.redirect('/admin/home')
    } catch(e) { 
        console.error(e)
    }
        
});

/* POST Modificar */
router.post('/modificar', async (req, res, next) => {
    const { id, titulo, tiempo, texto, media, tipo } = req.body;
    let img_id;

    try {

        if(req.files && Object.keys(req.files).length > 0) {
            const imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            if(media) await (destroy(media))
        }

        const obj= {
            titulo,
            tiempo,
            texto,
            tipo,
            media: img_id ?? media
        }
    
        await entradasModel.modifyEntrada(id, obj);
        res.redirect('/admin/home')
    } catch(e) { 
        console.error(e)
    }

});

/* DELETE */
router.get('/eliminar/:id', async (req, res, next) => {
    await entradasModel.deleteEntradas(req.params.id);
    res.redirect('/admin/home')
});

module.exports = router;