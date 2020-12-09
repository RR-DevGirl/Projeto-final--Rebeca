const usuarios = require('../model/usuario')
const SECRET = process.env.SECRET
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//adicionar uma chave para proteger a conta- ok
//fazer gerar um hash com o cadastro de uma nova conta- ok
//fazer um login
//fazer o login gerar um token
//fazer rota que adiciona contas dentro do usuário
//gerar um id automático
//fazer o getAll retornar sem as contas
//fazer um getAll que retorne apenas as suas contas
//excluir cadastro

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash

   let usuario = new usuarios(req.body)

   usuario.save(function(err){
    if(err){
     return res.status(500).send('Você não conseguiu se cadastrar')
    }
    const nome = req.body.nomeSocial
    if(!nome){
        const nomeComp = req.body.nomeCompleto
       return res.status(200).send(`Bem vindx ${nomeComp}`)
    }
       return res.status(200).send(`Bem vindx ${nome}`)
   })
}



module.exports = {
    create
}