const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/DiáriodeSenhas", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})

let db = mongoose.connection

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão okay")
})

const contas = require('./src/route/contasRoutes')

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
      )
      next()
    })
  
  app.use("/contas", contas)

  module.exports = app