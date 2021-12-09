var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var port = '3000';

app.use(express.static(path.join(__dirname, "/client/main")));
app.use(cors());
app.use(bodyParser.json());

// this is for a test
app.listen(port);