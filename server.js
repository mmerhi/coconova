var http = require("http");
var port = process.env['PORT'] || 8080;

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.write('Hello Node.js!<br>');
  if ('host' in req.headers) {
    var host = req.headers['host'];
    res.write('Vhost is ' + host.split(':')[0]+'<br>');
  } else {
    res.write('No vhost specieif\n');
  }
  res.end('<!DOCTYPE html><html><meta charset="utf-8"><title>It works' +
    "</title><b>It works!</b><br /><br />This is the server's " +
    "default server.js.");
}).listen(port);
console.log("Server ready to accept requests on port %d", port);
