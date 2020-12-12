const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuarioController')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const autenticar = (req, res, next) => {
    const authHeader = req.get('authorization')

    if(!authHeader){ return res.status(401).send('cadê os heards anjo')}
  
    const token = authHeader.split(' ')[1]
  
  
    jwt.verify(token, SECRET, function(erro){
       
      if(erro){
        
       return res.status(403).send('foi não visse? tem algo errado')
      }

  next()
})
}

router.post('/cadastro', controller.create)
router.post('/login', controller.login)
router.get('/all', controller.getAll)
router.get('/', controller.usuariosOnly)
router.get('/contas/:_id', autenticar, controller.getById)
router.delete('/:_id', autenticar, controller.remove)
router.patch('/:_id', autenticar, controller.updateUsuario)


module.exports = router