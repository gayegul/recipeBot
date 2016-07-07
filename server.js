var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;
app.get('/', function(req, res) {
  res.send('Welcome to Recipe Bot!');
});

app.listen(PORT, function() {
  console.log('up and running');
});
