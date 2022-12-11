const mongoose = require('mongoose');
const miesquema = mongoose.Schema;

const esquemaPedido = new miesquema({
    codigo : String,
    codusuario :String,
    fecha: Date,
    direccion : String,
    email : String ,
    telefono : Number ,
    subtotal: Number,
    impuestos : Number,
    total: Number,
    estado : Boolean
})
const modeloPedido = mongoose.model('pedidos',esquemaPedido);
// pedido:codigo,cod_usuario,fecha,estado,direccion,correo,telefono,subtotal,impuestos,total
//detalle pedido: codigo,cod_pedido,cod_producto,cantidad,valorunitario,valortotal
module.exports = modeloPedido;
