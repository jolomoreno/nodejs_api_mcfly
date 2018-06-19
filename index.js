var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/prueba', function (req, res) {
  res.send('Esto es una prueba');
});

app.listen(3000, function () {
  console.log('NodeJs_Api_McFly listening on port 3000!');
});