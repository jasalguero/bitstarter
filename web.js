var express = require('express');
var fs = require('fs')
var path = require('path');


var app = express.createServer(express.logger());

//static files
app.use('/css', express.static(path.join(__dirname,'/css')))
app.use('/imgs', express.static(path.join(__dirname,'/imgs')))

app.get('/', function(request, response) {
  fs.readFile('index.html', function(err,data){
    response.send(data.toString());
  });

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});