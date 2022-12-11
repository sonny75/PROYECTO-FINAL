const express = require('express');
const router = express.Router();
const controladorPedidos = require('../controllers/controller_pedidos');

router.get('/listar',controladorPedidos);
router.get('/cargar/:codigo',controladorPedidos);
router.post('/agregar',controladorPedidos);
router.post('/editar/:codigo',controladorPedidos);
router.delete('/borrar/:codigo',controladorPedidos);
module.exports = router;