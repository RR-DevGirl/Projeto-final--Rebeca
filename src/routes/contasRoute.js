const express = require('express')
const router = express.Router()
const controller = require('../controllers/contasController')

router.get('/dev', controller.getAllDev)
router.get('/:tipoDeConta', controller.tipoDeContas)
router.post('/:_id', controller.addConta)
router.get('/:_id', controller.getAllContas)
router.delete('/:_id', controller.remove)



module.exports = router