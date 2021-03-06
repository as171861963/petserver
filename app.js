var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwtAuth = require("./utils/jwt");

require("./dao/database")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var evaluatesRouter = require('./routes/evaluates.js');
var shopsRouter = require('./routes/shops');
var goodsRouter = require('./routes/goods');
var serviceRouter = require('./routes/services');
var petsRouter = require('./routes/pets');
var footsRouter = require('./routes/foots');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));//静态资源
app.use(jwtAuth);//验证

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/evaluates', evaluatesRouter);
app.use('/shops', shopsRouter);
app.use('/goods', goodsRouter);
app.use('/pets', petsRouter);
app.use('/foots', footsRouter);
app.use('/services', serviceRouter);


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
