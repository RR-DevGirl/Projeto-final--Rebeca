const express = require('express')
const router = express.Router()
const controller = require('../controllers/contasController')

router.post('/', controller.create)

module.exports = router