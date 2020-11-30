let amqp = require("amqplib/callback_api");
const {isValid} = require("../validation")

let receiveFromQueue = function() {
    amqp.connect("amqp://localhost", function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
            throw error1;
            }
            let QUEUE = "taskQueue"

            channel.assertQueue(QUEUE, {
            durable: false
            });

            channel.consume(QUEUE, function(msg) {
                if(isValid(msg.content.toString())) {
                    console.log("Valid: ", msg.content.toString())
                } else {
                    console.log("Invalid: ", msg.content.toString())
                }
            
                console.log(" [x] Received %s", msg.content.toString());
            }, {
                noAck: true
            });
        });
    });
} 

module.exports = {receiveFromQueue}
