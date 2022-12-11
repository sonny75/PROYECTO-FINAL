const mongoose = require('mongoose');
const miesquema = mongoose.Schema;

const esquemaProducto = new miesquema({
    codigo : String,
    codcategoria: String,
    nombre : String,
    precio : Number,
    activo : Boolean
})

const modeloProducto = mongoose.model('productos',esquemaProducto);

module.exports = modeloProducto;

