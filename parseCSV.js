const {sendToQueue} = require("./queue/sender")
const {receiveFromQueue} = require("./queue/receiver")

let parseCSVFile = function(req, res) {
    const file = req.file.buffer.toString()
    let csvArray = file.split(/\r?\n|\r/)
    sendToQueue(csvArray)
    receiveFromQueue()
    res.sendStatus(200)
}





module.exports = {parseCSVFile}