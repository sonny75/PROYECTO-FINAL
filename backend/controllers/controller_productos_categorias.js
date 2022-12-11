const express = require('express');
const router = express.Router();
const modeloProducto = require('../models/model_productos');
const modeloCategoria = require('../models/model_categorias');

router.get('/listar',(req, res)=>{
        modeloCategoria.aggregate([
        {
            $lookup: 
            {
                localField : "codigo",
                from : "productos",
                foreignField : "codcategoria",
                as : "productos_categorias",
            },
        },
        {$unwind : "$productos_categorias"}
    ])
    .then((result)=>{res.send(result); console.log(result)})
    .catch((error)=>{res.send(error); console.log(error)})
})


router.get('/listar/:codigo',(req, res)=>{
    var dataCategorias = [];
    modeloCategoria.find({codigo:req.params.codigo}).then(data => {
        console.log("Datos de la Categoria");
        console.log(data);
        //res.send(data);
        data.map((d,k)=>{
            dataCategorias.push(d.codigo);
            modeloProducto.find({codcategoria:{$in: dataCategorias}}).then(data=>{
                console.log("Productos de la categoria");
                console.log(data);
                res.send(data);
            })
            .catch((error)=>{res.send(error); console.log(error);})
        });
    })
})

module.exports = router;