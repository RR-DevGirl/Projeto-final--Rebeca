const express = require('express')
const router = express.Router()
const controller = require('../controllers/contasController')


router.get('/:_id', controller.getAllContas)
router.get('/dev', controller.getAllDev)

module.exports = router