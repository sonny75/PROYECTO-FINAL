const express = require('express');
const router = express.Router();
const modeloPedidoDetalle = require('../models/model_pedidodetalle');
const modeloPedido = require('../models/model_pedidos');

router.get('/listar',async (req, res)=>{
        
    let documento = await modeloPedidoDetalle.find()
    res.json(documento)
});


router.get("/crear/:codigo", async (req, res) => {

    const codigo = req.params.codigo;
    let documents 
    try {
        documents = await modeloPedido.find({codigo})
    } catch (error) {
        res.json(error.message)
        return;
    }

    let totalFactura = 0;
    documents.forEach(documento => {
        totalFactura = totalFactura + documento.total
    });

    res.json({"total factura": totalFactura})

})


router.get('/listar/:codigo',(req, res)=>{
    var dataPedidos = [];
    modeloPedido.find({codigo:req.params.codigo}).then(data => {
        console.log("Datos del pedido");
        console.log(data);
        //res.send(data);
        data.map((d,k)=>{
            dataPedidos.push(d.codigo);
            modeloPedidoDetalle.find({codpedido:{$in: dataPedidos}})
            .then(data=>{
                console.log("Detalles del pedido");
                console.log(data);
                res.send(data);
            })
            .catch((error)=>{
                console.log(error);
            })
        });
    })
})
module.exports = router;