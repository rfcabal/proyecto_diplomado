const express = require('express');
const router = express.Router();
const util =  require('util');
const cloudinary =  require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

const curriculumModel = require('../../models/curriculumModel');

/* POST Modificar */
router.post('/modificar', async (req, res, next) => {
    const { id, introduccion, correo, telefono, nombre, posicion, linkedin, github, reddit, foto} = req.body;
    let img_id;

    try {

        if(req.files && Object.keys(req.files).length > 0) {
            const imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            if(foto) await (destroy(foto))
        }

        const obj = {
            introduccion,
            correo,
            telefono,
            nombre,
            posicion,
            linkedin,
            github,
            reddit,
            foto: img_id ?? foto
        }
    
        await curriculumModel.modifyCurriculum(id, obj);
        res.redirect('/admin/home')
    } catch(e) { 
        console.error(e)
    }
});

module.exports = router;
