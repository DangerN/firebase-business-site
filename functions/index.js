const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")

const app = express()

app.get("yeet", (req, res) => {
  res.send("yeet yeet")
})

app.get("*", (request, response) => {
  response.send("Hello from Express on Firebase!")
})

const api = functions.https.onRequest(app)

module.exports = {
  api
}
