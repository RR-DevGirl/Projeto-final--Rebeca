const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuarioController')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const autenticar = (req, res, next) => {
    const authHeader = req.get('authorization')

    if(!authHeader){ return res.status(401).send('Header não definido')}
  
    const token = authHeader.split(' ')[1]
  
  
    jwt.verify(token, SECRET, function(erro){
       
      if(erro){
        
       return res.status(403).send('Acesso negado')
      }

  next()
})
}

router.post('/cadastro', controller.create)
router.post('/login', controller.login)
router.get('/all', controller.getAll)
router.get('/', autenticar, controller.usuariosOnly)
router.get('/contas/:_id', autenticar, controller.getById)
router.delete('/:_id', autenticar, controller.remove)
router.patch('/:_id', autenticar, controller.updateUsuario)


module.exports = router