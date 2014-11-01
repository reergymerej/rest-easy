var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/', routes.index);
app.get('/users', users.list);



// ================================================

var foo = require('./routes/rest-easy/foo.js');
app.post('/foo', foo.create);
app.get('/foo', foo.read);
app.get('/foo/:_id', foo.readOne);
app.put('/foo/:_id', foo.update);
app.delete('/foo/:_id', foo.delete);

var bar = require('./routes/rest-easy/bar.js');
app.post('/bar', bar.create);
app.get('/bar', bar.read);
app.get('/bar/:_id', bar.readOne);
app.put('/bar/:_id', bar.update);
app.delete('/bar/:_id', bar.delete);

// ================================================






/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
