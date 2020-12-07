const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuarioController')

router.post('/cadastro', controller.create)

module.exports = router