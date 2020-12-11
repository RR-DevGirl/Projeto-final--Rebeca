const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuarioController')

router.post('/cadastro', controller.create)
router.post('/login', controller.login)
router.post('/:_id', controller.addConta)
router.get('/', controller.getAll)
router.get('tudo/:_id', controller.getById)
router.delete('/:_id', controller.remove)
router.patch('/:_id', controller.updateUsuario)


module.exports = router