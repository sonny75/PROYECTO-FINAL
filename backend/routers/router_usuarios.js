const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controllers/controller_usuarios');
const {check} = require("express-validator")

router.post('/',[
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("email", "Agrega un email valido").isEmail(),
    //check("password", "El password debe tener minimo 8 caracteres").isLength({min:8})
    check("password", "El password debe ser una combinación de Mayúsculas, minúsculas, un caracter especial, un numero y debe estar entre 8 y 20 caracteres").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
    ],controladorUsuario.crearUsuario);

module.exports = router;
