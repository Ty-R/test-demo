var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var factRouter = require('./routes/fact');

var app = express();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(allowCrossDomain);

app.use('/', factRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.json({
    message: err.message,
    status: err.status
  });
});

module.exports = app;
