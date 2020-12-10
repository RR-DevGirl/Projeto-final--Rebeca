const usuarios = require('../model/usuario')
const importContas = require('../model/contas')
const SECRET = process.env.SECRET
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//adicionar uma chave para proteger a conta- ok
//fazer gerar um hash com o cadastro de uma nova conta- ok
//fazer um login-ok
//fazer o login gerar um token-ok
//fazer rota que adiciona contas dentro do usuário- ok
//gerar um id automático -ok
//fazer o getAll retornar sem as contas - depois
//fazer um getAll que retorne apenas as suas contas
//excluir cadastro
//atualizar cadastro


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

const login = (req, res) => {
    usuarios.findOne({email: req.body.email}, function(err, usuario) {
        if(!usuario){
            return res.status(404).send('Email incorreto ou inexistente')
        }
        const senhaCorreta = bcrypt.compareSync(req.body.senha, usuario.senha)
            if(!senhaCorreta) {
                return res.status(403).send('Esqueceu a senha?')
            }
            const token = jwt.sign({email:req.body.email}, SECRET)
            res.status(200).send(token)
    })
}

const addConta = async (req, res) => {
    
   const usuarioAchado = await usuarios.findOne({ _id: req.params._id })
  
    if(usuarioAchado){
        const conta = new importContas.contasModel(req.body)
        await conta.save()
        usuarioAchado.contas.push(conta)
        usuarioAchado.save(function(err){
            if(err){
             res.status(500).send('WHAT WAS THE REASON?')
            }
            res.status(200).send('keep a calm e deu certo')
        })
    
    }
    else{
        res.status(404).send('Usuário não encontrado')
    }

}

const getAll = (req, res) => {
usuarios.find(function(err, usuarioAll){
if(err){
    res.status(500).send('Cadê os usuários?')
    }
else{
    res.status(200).send(usuarioAll)
  }
 })
}

const getById = (req, res) => {
   
  usuarios.find({ _id: req.params._id }, function(err, usuario){
        if(err){
            res.status(500).send('algo de errado não esta certo')
        }
       else { return res.status(200).send(usuario)
    }
        
    })
    
}





module.exports = {
    create,
    login,
    addConta,
    getAll,
    getById,
   
}