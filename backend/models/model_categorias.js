const mongoose = require('mongoose');
const miesquema = mongoose.Schema;

const esquemaCategoria = new miesquema({
    codigo : String,
    nombre : String,
    activo : Boolean
})

const modeloCategoria = mongoose.model('categorias',esquemaCategoria);

module.exports = modeloCategoria;
