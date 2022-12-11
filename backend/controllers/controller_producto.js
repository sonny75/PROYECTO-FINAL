const express = require('express');
const router = express.Router();
const modeloProducto = require('../models/model_productos');

//Listar todos los registros
router.get('/listar',(req, res)=>{
    modeloProducto.find({},
        function(docs,err)
        {
            if(!err){res.send(docs);}
            else{res.send(err);}
        }
    )
})

//Cargar un registro en particular
router.get('/cargar/:codigo',(req, res)=>{
    modeloProducto.find({codigo:req.params.codigo}, 
        function(docs,err)
        {
            if(!err){res.send(docs);}
            else{res.send(err);}
        }
    )
})

//Agregar un registro
router.post('/agregar',(req,res)=>{
    const miProducto = new modeloProducto({
        codigo : req.body.codigo,
        codcategoria : req.body.codcategoria,
        nombre : req.body.nombre,
        precio : req.body.precio,
        activo : req.body.activo
    }) 
    miProducto.save(
        function(err)
        {
            if(!err){res.send("El registro se agregó exitosamente!!!");}
            else{res.send(err.stack);}
        }
    )
})

//Editar un registro
router.post('/editar/:codigo',(req,res)=>{
    modeloProducto.findOneAndUpdate({codigo:req.params.codigo},
        {
            codcategoria : req.body.codcategoria,
            nombre : req.body.nombre,
            precio : req.body.precio,
            activo : req.body.activo
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
    modeloProducto.findOneAndDelete({codigo:req.params.codigo},
        function(err)
        {
            if(!err){res.send("El registro se elimino exitosamente!!!");}
            else{res.send(err.stack);}
        }
    )
})

module.exports = router;
