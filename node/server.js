'use strict';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/public', express.static('public'));

app.get('*', function(req, res) {
	res.render('index', {
		title: 'Kidz'
	});
});

app.listen(80, function () {
	console.log('Example app listening on port http://localhost:80');
});
