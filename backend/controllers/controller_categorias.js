const express = require('express');
const router = express.Router();
const modeloCategoria = require('../models/model_categorias');

//Listar todos los registros
router.get('/listar',(req, res)=>{
    modeloCategoria.find({},
        function(docs,err)
        {
            if(!err){res.send(docs);}
            else{res.send(err);}
        }
    )
})

//Cargar un registro en particular
router.get('/cargar/:codigo',(req, res)=>{
    modeloCategoria.find({codigo:req.params.codigo}, 
        function(docs,err)
        {
            if(!err){res.send(docs);}
            else{res.send(err);}
        }
    )
})

//Agregar un registro
router.post('/agregar',(req,res)=>{
    const miCategoria = new modeloCategoria({
        codigo : req.body.codigo,
        codcategoria : req.body.codcategoria, 
        nombre : req.body.nombre,
        activo : req.body.activo
    }) 
    miCategoria.save(
        function(err)
        {
            if(!err){res.send("El registro se agregó exitosamente!!!");}
            else{res.send(err.stack);}
        }
    )
})

//Editar un registro
router.post('/editar/:codigo',(req,res)=>{
    modeloCategoria.findOneAndUpdate({codigo:req.params.codigo},
        {
            nombre : req.body.nombre,
            codcategoria : req.body.codcategoria,
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
    modeloCategoria.findOneAndDelete({codigo:req.params.codigo},
        function(err)
        {
            if(!err){res.send("El registro se elimino exitosamente!!!");}
            else{res.send(err.stack);}
        }
    )
})

module.exports = router;
