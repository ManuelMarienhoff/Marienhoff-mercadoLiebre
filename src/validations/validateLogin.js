const {body} = require("express-validator");
const userService = require("../services/usersService")
const bcrypt = require("bcryptjs");


module.exports = [
  body("email")
  .custom(async (value, { req }) => {
    const user = await userService.findByEmail(value);
    if (user.email === req.body.email && bcrypt.compareSync(req.body.password, user.password)) {
      return true;
    } else {
      throw new Error("Las credenciales no coinciden");
    }
  })
];