var vertx = require("vertx")
  , console = require("vertx/console")
  , client = vertx.createHttpClient().host("localhost").port(8000);

vertx.setPeriodic(1000, function() {
  client.getNow("/", function(response) {
    response.bodyHandler(function(body) {
      console.log(body);
    });
  });
});
