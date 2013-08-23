var vertx = require("vertx")
  , console = require("vertx/console");

vertx.eventBus.registerHandler("polite_handler", function(message, replier) {
  replier("Hello from JS!");
});

console.log("handler registered");
