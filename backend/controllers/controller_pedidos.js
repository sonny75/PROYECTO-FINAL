const express = require('express');
const router = express.Router();
const modeloPedido = require('../models/model_pedidos');

//Listar todos los registros
router.get('/listar',(rep,res)=>{
    modeloPedido.find({},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{res.send(err);}
    })
})

//Cargar un registro particular 
router.get('/cargar/:codigo',(req,res)=>{
    modeloPedido.find({codigo:req.params.codigo},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{res.send(err);}
    })
})

//Agregar un registro

router.post('/agregar',(req,res)=>{

    const Pedido = req.body
    
    const Total =parseFloat(Pedido.subtotal)  +parseFloat(Pedido.subtotal * Pedido.impuestos/100 )
    Pedido.total = Total
    const miPedido = new modeloPedido(Pedido)
    console.log(Total)
    console.log(Pedido.impuestos)
    
    
    miPedido.save(function(err)
    {
        if(!err){res.send(miPedido);}
        else{res.send(err.stack);}
    })
    
})


//editar un registro
router.post('/editar/:codigo',(req,res)=>{
    const Pedido = req.body
    
    const Total =parseFloat(Pedido.subtotal)  +parseFloat(Pedido.subtotal * Pedido.impuestos/100 )
   // Pedido.total = Total
   // const miPedido = new modeloPedido(Pedido)
    modeloPedido.findOneAndUpdate({codigo:req.params.codigo},
    {
        codusuario : req.body.codusuario,
        fecha : req.body.fecha,
        direccion : req.body.direccion,
        email : req.body.email,
        telefono : req.body.telefono,
        subtotal : req.body.subtotal,
        impuestos : req.body.impuestos,
        estado : req.body.estado,
        total: Total
    }, 
        function(err)
        {
            if(!err){res.send("El registro se actualizo exitosamente!!");}
            else{res.send(err.stack);}
        })
})
//Borrar un registro
router.delete('/borrar/:codigo',(req,res)=>{
    modeloPedido.findOneAndDelete({codigo:req.params.codigo},
        function(err)
        {
            if(!err){res.send("El registro se elimino Exitosamente!!");}
            else{res.send(err.stack);}
        })
})
module.exports = router ;