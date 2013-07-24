var express = require('express');
var app = express();
var fs = require('fs');
var infile = "index.html";
// var text = fs.readFileSync(infile);

buf = new Buffer();
buf = fs.readFileSync(infile);
String text = buf.toString();

app.use(express.logger());

app.get('/', function(request, response) {
  
  response.send(text);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
