var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(express.static(path.resolve(".") + '/build'));
app.get('/*', (req, res)=> {
  res.sendFile(path.join(path.resolve("."), 'build/index.html'));
});

module.exports = app;