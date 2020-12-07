const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema ({
    nomeCompleto: { type: String },
    nomeSocial: { type: String },
    email: { type: String },
    senha: { type: String },
    numero: { type: Number },
    dataDeNascimento: { type: String }
})

const usuario = new mongoose.model("usuarios",usuarioSchema)

module.exports = usuario