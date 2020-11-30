require('dotenv').config()
const express = require("express")
const app = express()
const multer = require("multer")
const upload = multer()
const port = 3000

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const {parseCSVFile} = require("./parseCSV")

app.use(express.static("public"))

app.post("/getfile", upload.single("file"), async (req, res) => {
  await parseCSVFile(req, res)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})