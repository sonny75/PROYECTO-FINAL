const express = require('express');
const router = express.Router();
const controladorAuth = require('../controllers/controller_auth');
const {check} = require("express-validator")
const auth = require("../middleware/auth");

router.post('/',[
    check("email","Agrega un email valido").not().isEmpty(),
    //check("password", "El password debe tener minimo 8 caracteres").isLength({min:8})
    check("password", "El password debe ser una combinación de Mayúsculas, minúsculas, un caracter especial, un numero y debe estar entre 8 y 20 caracteres").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
    ],controladorAuth.autenticarUsuario);

router.get('/', auth, controladorAuth.usuarioAutenticado);

module.exports = router;
