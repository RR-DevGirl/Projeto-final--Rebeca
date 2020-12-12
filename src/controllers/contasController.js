const importcontas = require('../model/contas')
const contaModel = importcontas.contasModel
const importUsuario = require('../model/usuario')
const usuarios = importUsuario.usuario



const addConta = async (req, res) => {
    
    const usuarioAchado = await usuarios.findOne({ _id: req.params._id })
   
     if(usuarioAchado){
         const conta = new contaModel(req.body)
         await conta.save()
         usuarioAchado.contas.push(conta)
         usuarioAchado.save(function(err){
             if(err){
              res.status(500).send('Erro ao adicionar uma nova conta')
             }
             res.status(200).send('Conta adicionada com sucesso')
         })
     
     }
     else{
         res.status(404).send('Usuário não encontrado')
     }
 
 }
 


const getAllContas = (req, res) => {
    usuarios.find({ _id: req.params._id },'contas', function(err, conta){
        if(err){
            res.status(500).send('Erro ao encontrar as contas desse usuario')
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
                 res.status(500).send('Erro ao remover a conta')
             }
             res.status(200).send('Conta removida com sucesso')
         })
         
        })
    }




  
const tipoDeContas = (req, res) => {
    contaModel.find({ tipoDeConta: req.params.tipoDeConta }, function(err, conta){
        if(err){
            res.status(500).send('Erro ao encontrar essa pasta')
        }
       else { return res.status(200).send(conta)
    }
        
    })
}

const updateContas = (req, res) => {
    const usuarioId = req.params.usuarioId
    const contaId = req.params.contaId
    const options = { new: true}
    
    usuarios.findOneAndUpdate({_id: usuarioId, 'contas._id': contaId},{
        $set:{
            'contas.$.donxDaConta': req.body.donxDaConta,
            'contas.$.conta': req.body.conta,
            'contas.$.tipoDeConta': req.body.tipoDeConta,
            'contas.$.dadosDaConta': req.body.dadosDaConta
        }
     },
     options,
     (erro, conta) => {
         if(erro){
            res.status(500).send('Erro 500')
         }
         if(conta){
            contaModel.updateMany({_id: contaId},{$set: req.body}, function(erradin){
                if(erradin){
                    res.status(500).send('erro ao atualizar a conta')
                }
                res.status(200).send('Conta atualizada com sucesso')
            } )
         }
         
     }
    )
}

const nomeConta = (req, res) => {
    contaModel.find({ conta: req.params.conta }, function(err, nameContas){
        if(err){
            res.status(500).send('Erro ao encontrar a conta')
        }
       else { return res.status(200).send(nameContas)
    }
        
    })
}


module.exports = {
    getAllContas,
    getAllDev,
    remove,
    addConta,
    tipoDeContas,
    updateContas,
    nomeConta
  
}
