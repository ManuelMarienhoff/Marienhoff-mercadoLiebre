const db = require("../data/db");
const bcrypt = require("bcryptjs");


const userServices = {
  createUser: function (user) {
    db.users.create(user);
  },
  findByField: function(field,text){
   const userToLogin =  db.users.findByField(field,text)
    if(userToLogin){
      return userToLogin
    } 
  },
  login: function(req,res){
     const userToLogin = this.findByField("email", req.body.email);
     if (userToLogin) {
       let isOkPassword = bcrypt.compareSync(req.body.password,userToLogin.password);
       if (isOkPassword) {
         delete userToLogin.password; /* borro la contraseña para que no quede en session */
         req.session.userLogged = userToLogin; /* guardo el usuario en session */

         if (req.body.rememberUser) {
           res.cookie("userEmail", req.body.email, { maxAge: 1000 * 10 });
         }

       } 
     } 
  }
};

module.exports = userServices;
