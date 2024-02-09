require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var cors =  require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var curriculumRouter = require('./routes/admin/curriculum');
var entradasRouter = require('./routes/admin/entradas');
var loginRouter = require('./routes/admin/login');
var homeRouter = require('./routes/admin/home');
var accionRouter = require('./routes/admin/accion');
var apiRouter = require('./routes/api/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}))

var secured = async(req, res, next) => {
  try {
    if(req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error)
  }
}

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: '123456',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

app.use('/', indexRouter);
app.use('/admin/login', loginRouter)
app.use('/admin/home', secured, homeRouter)
app.use('/admin/accion', secured, accionRouter)
app.use('/admin/curriculum', secured, curriculumRouter);
app.use('/admin/entradas', secured, entradasRouter);
app.use('/api/', cors(), apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
