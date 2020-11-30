const express = require("express")
const app = express()
const multer = require("multer");
const upload = multer();
const port = 3000

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const {checkDomain} = require("./validation")
const {parseCSVFile} = require("./parseCSV")

app.use(express.static("public"));

app.get("/checkdomain/:domain", (req, res) => {
  checkDomain(req, res)
})

app.post("/getfile", upload.single("file"), (req, res) => {
  parseCSVFile(req, res);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})