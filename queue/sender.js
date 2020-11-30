
let amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1
    }
    let QUEUE = "taskQueue"
    let msg = 'Hello world'

    channel.assertQueue(QUEUE, {
      durable: false
    });

    channel.sendToQueue(QUEUE, Buffer.from(msg))
    console.log(" [x] Sent %s", msg)
  })

})