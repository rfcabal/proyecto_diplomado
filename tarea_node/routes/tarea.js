var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('esto es una prueba de GET');
});

router.post('/', function(req, res, next) {
    res.send('esto es una prueba de POST');
});
  

module.exports = router;
