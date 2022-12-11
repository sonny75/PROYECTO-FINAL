const express = require('express');
const router = express.Router();
const modeloPedidosDetalle = require('../models/model_pedidodetalle');

//Listar todos los registros
router.get('/listar',(rep,res)=>{
    modeloPedidosDetalle.find({},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{res.send(err);}
    })
})

//Cargar un registro particular 
router.get('/cargar/:codigo',(req,res)=>{
    modeloPedidosDetalle.find({codigo:req.params.codigo},function(docs,err)
    {
        if(!err){res.send(docs);}
        else{res.send(err);}
    })
})

//Agregar un registro
router.post('/agregar',(req,res)=>{
    const miPedidoDetalle = new modeloPedidosDetalle({
        codigo : req.body.codigo,
        codpedido : req.body.codpedido, 
        codproducto : req.body.codproducto,
        valorunitario : req.body.valorunitario,
        cantidad : req.body.cantidad,
        valortotal: req.body.valortotal
        
    }) 
    miPedidoDetalle.save(
        function(err)
        {
            if(!err){res.send("El registro se agregó exitosamente!!!");}
            else{res.send(err.stack);}
        }
    )
})

//Editar un registro
router.post('/editar/:codigo',(req,res)=>{
    modeloPedidosDetalle.findOneAndUpdate({codigo:req.params.codigo},
        {
            codigo : req.body.codigo,
            codpedido : req.body.codpedido,
            codproducto: req.body.codproducto,
            valorunitario: req.body.valorunitario,
            cantidad: req.body.cantidad,
            valortotal: req.body.valortotal
        },
            function(err)
            {
                if(!err){res.send("El registro se actualizó exitosamente!!!");}
                else{res.send(err.stack);}
            }
        )
})

//Borrar un registro
router.delete('/borrar/:codigo',(req,res)=>{
    modeloPedidosDetalle.findOneAndDelete({codigo:req.params.codigo},
        function(err)
        {
            if(!err){res.send("El registro se elimino exitosamente!!!");}
            else{res.send(err.stack);}
        }
    )
})

module.exports = router;
