var express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(cors());

//V0.1 Initial api.js
app.get('/about', function (req, res) {
  res.send('Hello from the Legal One coding-challenge REST-API');
});

app.listen(3030, function () {
  console.log('Legal One coding-challenge REST-API isLegal One coding-challenge REST-API listening on port 3030!');
});
