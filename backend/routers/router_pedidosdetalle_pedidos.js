const express = require('express');
const router = express.Router();

//Rutas para el controlador de productos
const controladorPedidosDetallePedidos = require('../controllers/controller_pedidosdetalle_pedidos');
router.get('/listar',controladorPedidosDetallePedidos);
router.get('/listar/:codigo',controladorPedidosDetallePedidos);
router.get('/crear/:codigo',controladorPedidosDetallePedidos);
module.exports = router;
