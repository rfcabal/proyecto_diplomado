var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('esto es una ruta de prueba de otros GET');
});

router.post('/', function(req, res, next) {
    res.send('esto es una ruta de prueba de otros POST');
});
  

module.exports = router;
