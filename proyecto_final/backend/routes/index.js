var express = require('express');
var router = express.Router();
var pool =  require('../config/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
