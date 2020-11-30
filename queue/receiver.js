let amqp = require("amqplib")
const {isValid} = require("../validation")
const {checkDomainExpiration} = require("../domainExpirationCheck")
const {Domain} = require("../db/connection")

let checkAndStore = async function(message) {
    if(isValid(message)) {
        let expirationDate = await checkDomainExpiration(message)
        if(expirationDate) {
            try {
                await Domain.create({ domain: message, expiration_date: expirationDate, is_valid: true })
            } catch(e) {
                console.log("Error: ", e)
            }
        }
    } else {
        console.log("Invalid: ", message)
    }
}

let receiveFromQueue = async function() {
    try {
        const connection = await amqp.connect("amqp://localhost")
        const channel = await connection.createChannel()
        
        const  QUEUE = "taskQueue"
    
        channel.assertQueue(QUEUE, {
             durable: false
        })
    
        channel.consume(QUEUE, async function(msg) {
            try {
                let message = msg.content.toString()
                await checkAndStore(message)
                console.log(" [x] Received %s", message)
            } catch (e) {
                throw e
            }
        },{
            noAck: true
        })
    } catch(e) {
        throw e
    }
} 

module.exports = {receiveFromQueue}
