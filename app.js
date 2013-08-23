var vertx = require("vertx")
  , console = require("vertx/console");

//vertx.eventBus.registerHandler("hello_handler", function(message, replier) {
//  replier("Hello, Toronto JavaScript!");
//});

vertx.createHttpServer().requestHandler(function(request) {
  vertx.eventBus.send("polite_handler", {}, function(reply) {
    request.response.end(reply);
  });
}).listen(8000);

console.log("server started");
