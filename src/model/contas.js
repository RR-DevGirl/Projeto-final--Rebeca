const mongoose = require('mongoose')

const contasSchema = new mongoose.Schema({
    id : { type: Number }, // como gerar um automático (números consecutivos)
    nome : { type: String },
    conta: { type: String, required: true},
    login: [{
        usuário: { type: String },
        senha: { type: String },
        email: { type: String}

    }]

},
{versionKey: false}
)

const contas = new mongoose.model('contasCollection', contasSchema)

module.exports = contas