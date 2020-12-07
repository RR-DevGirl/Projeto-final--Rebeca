const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.status(200).send({
      "TITLE":  "DIÁRIO DE SENHAS",
      "subtitle": "Um lugar seguro para você armazenar e organizar suas senhas",
      "version": "1.0.0"
    })
})

module.exports = router
