let amqp = require("amqplib/callback_api");
const {isValid} = require("../validation")
const {checkDomainExpiration} = require("../domainExpirationCheck")
const {Domain} = require("../db/connection")

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

            channel.consume(QUEUE, async function(msg) {
                let message = msg.content.toString()
                if(isValid(message)) {
                    let expirationDate = await checkDomainExpiration(message)
                    if(expirationDate) {
                        try {
                            let domain = await Domain.create({ domain: message, expiration_date: expirationDate, is_valid: true })
                        } catch(e) {
                            console.log("Error: ", e)
                        }
                    }
                } else {
                    console.log("Invalid: ", message)
                }
            
                console.log(" [x] Received %s", message);
            }, {
                noAck: true
            });
        });
    });
} 

module.exports = {receiveFromQueue}
