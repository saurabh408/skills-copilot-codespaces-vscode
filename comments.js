// Create web server
var express = require('express');
var app = express();

// Create a route for GET requests
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Listen on port 3000
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});