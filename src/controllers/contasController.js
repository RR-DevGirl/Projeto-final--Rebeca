const contas = require('../model/contas')

const create = (req, res) => {
    let conta = new contas(req.body)

    conta.save(function(err){ 
        if(err){
            return res.status(500).send('Erro ao incluir nova conta')
        }
        return res.status(200).send('Nova conta inclusa com sucesso')
    })
}

module.exports = {
    create
}