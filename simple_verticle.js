var server = require("vertx").createHttpServer();

server.requestHandler(function(request) {
  request.response.end("Hello, Toronto JavaScript!");
}).listen(8000);
