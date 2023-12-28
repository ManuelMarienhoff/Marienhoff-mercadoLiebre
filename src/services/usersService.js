const { User } = require("../database/models");
const bcrypt = require("bcryptjs");


module.exports = {
    findAll:  function(){
       const users =  User.findAll();
       return users
    },
    findById:  function(id){
        const user =  User.findByPk(id);
        return user
    },
    findByEmail:  function(email){
        const user =  User.findOne({
            where: {
                email: email
            }
        })
        if(user){
            return user
        } else {
            return false
        }
    },
    create: function(userData, file){
        User.create({
          name: userData.name,
          surname: userData.surname ,
          username: userData.username,
          email: userData.email,
          password: bcrypt.hashSync(userData.password,10),
          profile_id: userData.userProfile,
          image: file ? file.filename : "default.png"
        });
    },
    delete: function(id){
        User.destroy({
            where: {
                id: id
            }
        })
    },
    login: async function(req,res){
        const userToLogin = await this.findByEmail(req.body.email);
         if (userToLogin) {
           let passwordsMatch = bcrypt.compareSync(req.body.password,userToLogin.password);
           if (passwordsMatch) {
             delete userToLogin.password; /* borro la contraseña para que no quede en session */
             req.session.userLogged = userToLogin.dataValues; /* guardo el usuario en session */ /* dataValues ?????????????????????????????????????? */
             if (req.body.rememberUser) {
               res.cookie("userEmail", req.body.email, {maxAge: (1000 * 1) * 1,}); /* 5 minutos */
             }
           }
         } 
    }
}
