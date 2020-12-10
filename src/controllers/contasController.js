const importcontas = require('../model/contas')
const contas = importcontas.contasModel

//autenticar as rotas- pegar o token gerado e só liberar determinadas rotas assim
//deletar contas
//fazer atualizar dados da conta
//tirar getAll quando terminar tudo 





/*const create = (req, res) => {
    let conta = new contas(req.body)

    conta.save(function(err){ 
        if(err){
            return res.status(500).send('Erro ao incluir nova conta')
        }
        return res.status(200).send('Nova conta inclusa com sucesso')
    })
}
*/
const getAll = (req, res) => {
  contas.find(function(err, conta){
      if(err){
          return res.status(500).send('Algo deu errado, ein')
      }
      return res.status(200).send(conta)
  })
}

module.exports = {
    getAll
}