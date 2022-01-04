var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var token = require('../config.js');

var port = '3000';

var directory = path.join(__dirname, "../client/main");

app.use(express.static(path.join(__dirname, "../client/main")));
app.use(cors());
app.use(bodyParser.json());


app.get('/products/:product_id/related', (req, res) => {

  console.log('showing related products of: ', req.params.product_id);
  console.log(token);
  res.end(req.params.product_id);
  // res.sendStatus(200);

});

// this is for a test
app.listen(port, () => {
  console.log('serving: ', directory );
  console.log(`app listening at http://localhost:${port}`);

})