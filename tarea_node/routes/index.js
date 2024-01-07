var express = require('express');
var router = express.Router();
var pool =  require('../config/db')

/* GET home page. */
router.get('/', function(req, res, next) {

  pool.query("SELECT * FROM empleados").then( function(resultados) {
    console.log(resultados);
  })

  res.render('index', { title: 'Express' });
});

module.exports = router;
