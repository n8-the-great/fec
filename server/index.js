var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var compression = require('compression');
// app.use(compression());


var port = '3000';

app.use(express.static(path.resolve(__dirname, "../client/main")));
app.use(cors());
app.use(bodyParser.json());

app.get('/')

app.listen(port);
