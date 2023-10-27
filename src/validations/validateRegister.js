const { body } = require("express-validator");
const userService = require("../services/usersService")

module.exports= [
    body("name")
    .notEmpty().withMessage("Debes completar este campo").bail(),

    body("surname")
    .notEmpty().withMessage("Debes completar este campo").bail(),

    body("username")
    .notEmpty().withMessage("Debes completar este campo").bail(),

    body("email")
    .notEmpty().withMessage("Debes completar este campo").bail()
    .isEmail().withMessage("Debes ingresar un email valido").bail()
    .custom(async value => {
        const user = await userService.findByField("email", value);
        if (user){
            throw new Error("Este email ya se encuentra en uso")
        }
        return true
    })
    ,

    body("birthdate")
    .notEmpty().withMessage("Debes completar este campo").bail(),

    body("address")
    .notEmpty().withMessage("Debes completar este campo").bail(),

    body("userProfile")
    .notEmpty().withMessage("Debes completar este campo").bail(),

    body("userPhoto"),
    
    body("password")
    .notEmpty().withMessage("Debes completar este campo").bail(),

    body("confirmPassword")
    .notEmpty().withMessage("Debes completar este campo").bail()
    .custom((value, {req} )=>{
        return value === req.body.password
    }).withMessage("Las contraseñas deben coincidir")

]