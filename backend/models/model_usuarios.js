const mongoose = require('mongoose');
const miesquema = mongoose.Schema;

const esquemaUsuarios = new miesquema({
    nombre : {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true, unique: true},
    password : {type: String, required: true, trim: true},
    registro : {type: Date, default: Date.now()}
})

const modeloUsuario = mongoose.model('usuarios',esquemaUsuarios);

module.exports = modeloUsuario;