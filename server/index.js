var express = require('express');
var path = require('path');

var app = express();

var port = '3000';

app.use(express.static(path.join(__dirname, "/client/main")));


app.listen(port);