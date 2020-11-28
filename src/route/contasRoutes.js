const express = require('express')
const router = express.Router()
const controller = require('../controller/contasController')

router.post('/', controller.postContas)
router.get('/', controller.getAll)

module.exports = router