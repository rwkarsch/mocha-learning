var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(request, response){
  response.send('Hello World');
});

app.get('/about', function(request, response){
	response.send('about');
});

app.get('/math', function(request, response){
	var answer = 0;
	answer = 1 + 1;

	response.send('The answer is: ' + answer);
});

var server = app.listen(3000, function(){
  console.log('Magic is happening on port 3000');
});

exports.closeServer = function(){
  server.close();
};
