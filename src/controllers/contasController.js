const importcontas = require('../model/contas')
const contaModel = importcontas.contasModel
const usuarios = require('../model/usuario')
//const usuarioController = require('./usuarioController')

//autenticar as rotas- pegar o token gerado e só liberar determinadas rotas assim
//deletar contas- ok
//fazer atualizar dados da conta
//tirar getAll quando terminar tudo -ok
//adicionar busca por tipo de conta





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
  contaModel.find(function(err, conta){
      if(err){
         res.status(500).send('Algo deu errado, ein')
      }
      res.status(200).send(conta)
     
  })
}

const remove = (req, res) => {
    
    contaModel.deleteMany({ _id: req.params._id },function (err) {
          if (err) {
            return res.status(500).send('Conta não removida')
          }
        
         usuarios.updateMany({}, { $pull: {'contas': {_id: req.params._id} } }, function(error){
             if(error){
                 res.status(500).send('Deu errado mas calma')
             }
             res.status(200).send('Pode respirar agora que deu certo')
         })
         
        })
    }




  
const tipoDeContas = (req, res) => {
    contaModel.find({ tipoDeConta: req.params.tipoDeConta }, function(err, conta){
        if(err){
            res.status(500).send('deu ruinzao')
        }
       else { return res.status(200).send(conta)
    }
        
    })
}



module.exports = {
    getAllContas,
    getAllDev,
    remove,
    tipoDeContas
  
}
