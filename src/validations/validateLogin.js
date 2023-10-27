const {body} = require("express-validator");
const userService = require("../services/usersService")
const bcrypt = require("bcryptjs");


module.exports = [
  body("email")
  .custom(async (value, { req }) => {
    const user = await userService.findByField("email", value);
    const verifiedPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (user.email === req.body.email && verifiedPassword) {
      return true;
    } else {
      throw new Error("Las credenciales no coinciden");
    }
  })
];