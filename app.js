var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var router = require('./routes/index');

var app = express();

var http = require('http');
var server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

server.listen('3000');
