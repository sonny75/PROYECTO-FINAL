const express = require('express');
const router = express.Router();

//Rutas para el controlador de productos
const controladorProductosCategorias = require('../controllers/controller_productos_categorias');
router.get('/listar',controladorProductosCategorias);
router.get('/listar/:codigo',controladorProductosCategorias);

module.exports = router;
