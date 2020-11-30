let amqp = require('amqplib/callback_api');

let sendToQueue = function(csvArray) {
  amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1
      }
      let QUEUE = "taskQueue"
      let msg;  

      for(let i = 1; i < csvArray.length-1; i++) {
        msg = csvArray[i]
        channel.assertQueue(QUEUE, {
          durable: false
        });

          channel.sendToQueue(QUEUE, Buffer.from(msg))

        console.log(" [x] Sent %s", msg)
      }
    })
  })
}

module.exports = {sendToQueue}