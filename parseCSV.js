var fs = require("fs"); 
var parse = require("csv-parse");

let parseCSVFile = function(req, res) {
    const file = req.file.buffer.toString()
    let csvArray = file.split(/\r?\n|\r/)
    return csvArray
}





module.exports = {parseCSVFile}