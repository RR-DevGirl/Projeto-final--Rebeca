const importcontas = require('../model/contas')
const contaModel = importcontas.contasModel
const importUsuario = require('../model/usuario')
const usuarios = importUsuario.usuario



//adicionar busca por tipo de conta- melhorar
//busca por nome da conta- ok
//atualizar -ok

const addConta = async (req, res) => {
    
    const usuarioAchado = await usuarios.findOne({ _id: req.params._id })
   
     if(usuarioAchado){
         const conta = new contaModel(req.body)
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
            res.status(500).send('choremos')
         }
         if(conta){
            contaModel.updateMany({_id: contaId},{$set: req.body}, function(erradin){
                if(erradin){
                    res.status(500).send('erradin')
                }
                res.status(200).send('bababab')
            } )
         }
         
     }
    )
}

const nomeConta = (req, res) => {
    contaModel.find({ conta: req.params.conta }, function(err, nameContas){
        if(err){
            res.status(500).send('chora não bb')
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
