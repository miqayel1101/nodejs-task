let amqp = require("amqplib")

let sendToQueue = async function(csvArray) {
  try {
    const connection = await amqp.connect("amqp://localhost")
    const channel = await connection.createChannel()
    let QUEUE = "taskQueue"
    let msg

    for(let i = 1; i < csvArray.length-1; i++) {
      msg = csvArray[i]
      channel.assertQueue(QUEUE, {
        durable: false
      });

      channel.sendToQueue(QUEUE, Buffer.from(msg))

      console.log(" [x] Sent %s", msg)
    }
  }
  catch(e) {
    throw e
  }
}

module.exports = {sendToQueue}