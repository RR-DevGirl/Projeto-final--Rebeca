const mongoose = require('mongoose')
const contas = require('./contas')

const usuarioSchema = new mongoose.Schema ({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nomeCompleto: { type: String, required: true },
    nomeSocial: { type: String },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    numero: { type: String },
    dataDeNascimento: { type: String },
    contas: [contas.contasSchema]
},
{
    versionKey: false
})

const usuario = new mongoose.model("usuarios",usuarioSchema)

module.exports = {
    usuario,
    usuarioSchema
}