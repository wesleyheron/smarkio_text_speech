const config = require('./app/config/server-config')();
const express = require('express');
const bodyParser = require('body-parser');
var path		= require("path");


const app = express();
const router = express.Router();


const index = require('./app/models/index');
const comment = require('./app/models/comment');

const indexRoute = require('./app/routes/index');
const commentRoute = require('./app/routes/comment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.use('/api/', indexRoute);
app.use('/api/comments', commentRoute);


app.use(express.static(__dirname + '/app/public'));

app.use('/*', function (req, res) {
	res.sendFile(path.resolve('app/public/index.html'));
});


module.exports = app;


app.listen(config.port, () => {
    console.log('Servidor rodando na porta ' + config.port);
});
