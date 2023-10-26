const {body} = require("express-validator");

module.exports = [
    body("email")
    .notEmpty().withMessage("Debes completar el campo de email").bail()
    .isEmail().withMessage("Debes ingresar un email valido").bail(),
    body("password")
]