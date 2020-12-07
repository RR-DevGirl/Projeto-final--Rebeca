const mongoose = require('mongoose')

const contasSchema = new mongoose.Schema({
    donxDaConta: { type: String, required: true },
    conta: { type: String, required: true },
    tipoDeConta: { type: String, required: true },
    dadosDaConta: { type: Array, required: true }
},
{versionKey: false}
)

const contas = new mongoose.model('contasCollection', contasSchema)

module.exports = contas