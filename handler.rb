require "vertx"

Vertx::EventBus.register_handler "polite_handler" do |message|
  message.reply "Hello from Ruby!"
end

puts "ruby handler registered"
