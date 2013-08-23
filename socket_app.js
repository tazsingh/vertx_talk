var vertx = require("vertx")
  , console = require("vertx/console")
  , server = vertx.createHttpServer();

server.requestHandler(function(request) {
  vertx.eventBus.send("polite_handler", {}, function(reply) {
    request.response.end(reply);
  });
});

var sockServer = vertx.createSockJSServer(server);

sockServer.bridge(
  { prefix: "/eventbus" }
// incoming
, [
    {
      address: "polite_handler"
    }
  ]
// outgoing
, [
    {
      address: "polite_handler"
    }
  ]
);

server.listen(8000);

console.log("server listening");
