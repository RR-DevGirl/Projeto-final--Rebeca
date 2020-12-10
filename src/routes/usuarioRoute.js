const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuarioController')

router.post('/cadastro', controller.create)
router.post('/login', controller.login)
router.post('/:_id', controller.addConta)
router.get('/', controller.getAll)
router.get('/:_id', controller.getById)

module.exports = router