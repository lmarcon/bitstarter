var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html', {encoding: 'utf-8'}, function (err, data) {
    if (err) throw err;
  });
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
