var express = require('express');
var consign = require('consign');
var bodyparse = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'))
app.use(bodyparse.urlencoded({extended: true}));
app.use(expressValidator());

consign()
		.include('app/routes')
		.then('config/coneccoes.js')
		.then('app/models')
		.then('app/controller')
		.into(app);

module.exports = app;