const usuarios = require('../model/usuario')

const create = (req, res) => {
   let usuario = new usuarios(req.body)

   usuario.save(function(err){
    if(err){
     return res.status(500).send('Você não conseguiu se cadastrar')
    }
    const nome = req.body.nomeSocial
    return res.status(200).send(`Bem vindx ${nome}`)
   })
}

module.exports = {
    create
}