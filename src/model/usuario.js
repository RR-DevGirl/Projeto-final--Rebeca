const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema ({
    nomeCompleto: { type: String, required: true },
    nomeSocial: { type: String },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    numero: { type: Number },
    dataDeNascimento: { type: String }
},
{
    versionKey: false
})

const usuario = new mongoose.model("usuarios",usuarioSchema)

module.exports = usuario