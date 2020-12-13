const express = require('express')
const router = express.Router()
const controller = require('../controllers/contasController')
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
 

router.get('/dev', controller.getAllDev)
router.get('/:tipoDeConta', autenticar, controller.tipoDeContas)
router.get('/minhaconta/:conta', autenticar, controller.nomeConta)
router.post('/:_id', autenticar, controller.addConta)
router.get('/:_id', autenticar, controller.getAllContas)
router.delete('/:_id', autenticar, controller.remove)
router.patch('/:usuarioId/:contaId', autenticar, controller.updateContas)





module.exports = router