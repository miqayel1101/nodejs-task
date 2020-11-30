const {sendToQueue} = require("./queue/sender")
const {receiveFromQueue} = require("./queue/receiver")

let parseCSVFile = async function(req, res) {
    try {
        const file = req.file.buffer.toString()
        let csvArray = file.split(/\r?\n|\r/)
        await sendToQueue(csvArray)
        await receiveFromQueue()
    }
    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
    res.sendStatus(200)
}

module.exports = {parseCSVFile}