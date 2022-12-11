const express = require('express');
const router = express.Router();

//Rutas para el controlador de categorias
const controladorCategorias = require('../controllers/controller_categorias');
router.get('/listar',controladorCategorias);
router.get('/cargar/:codigo',controladorCategorias);
router.post('/agregar',controladorCategorias);
router.post('/editar/:codigo',controladorCategorias);
router.delete('/borrar/:codigo',controladorCategorias);

module.exports = router;
