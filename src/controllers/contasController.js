const importcontas = require('../model/contas')
const contas = importcontas.contasModel
const usuarios = require('../model/usuario')

//autenticar as rotas- pegar o token gerado e só liberar determinadas rotas assim
//deletar contas
//fazer atualizar dados da conta
//tirar getAll quando terminar tudo -ok





const getAllContas = (req, res) => {
    usuarios.find({ _id: req.params._id },'contas', function(err, conta){
        if(err){
            res.status(500).send('algo de errado não esta certo')
        }
       else { return res.status(200).send(conta)
    }
        
    })

}

const getAllDev = (req, res) => {
  contas.find(function(err, conta){
      if(err){
         res.status(500).send('Algo deu errado, ein')
      }
      res.status(200).send(conta)
     
  })
}

module.exports = {
    getAllContas,
    getAllDev
}
