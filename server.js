const express = require('express')
const app = express()
const port = 3000

const {checkDomain} = require("./validation")

app.get('/checkdomain/:domain', (req, res) => {
  checkDomain(req, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})