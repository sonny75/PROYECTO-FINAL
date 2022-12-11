const express = require('express');
const router = express.Router();

//Rutas para el controlador de productos
const controladorProductos = require('../controllers/controller_producto');
router.get('/listar',controladorProductos);
router.get('/cargar/:codigo',controladorProductos);
router.post('/agregar',controladorProductos);
router.post('/editar/:codigo',controladorProductos);
router.delete('/borrar/:codigo',controladorProductos);

module.exports = router;
