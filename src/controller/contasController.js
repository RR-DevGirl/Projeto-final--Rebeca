const contas = require('../model/contas')

const postContas = (req, res) => {
    let conta = new contas(req.body)
    conta.save(function(err){
        if (err){ return res.status(500).send('não entrou quiridan')}
        else{return res.status(200).send('tudo dentro dos conformes')
            
    }
    })
}

const getAll = (req, res) => {
    contas.find(function(err, conta){
if (err) return res.status(500).send('errou linda')
else { return res.status(200).send(conta)}
    })
}



module.exports = {
    getAll,
    postContas
}

