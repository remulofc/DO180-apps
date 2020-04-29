<<<<<<< HEAD
var createError = require('html-errors');
=======
var createError = require('http-errors');
>>>>>>> f816d86aa10540b9f337c9eacb40ab14874e88e0

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World from pod: ' + process.env.HOSTNAME + '\n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

