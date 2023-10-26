const userServices = require("../services/usersService");
const bcrypt = require("bcryptjs");


module.exports = {
    getLogin:  (req,res)=>{
        res.render("users/login");
    },
    login: (req,res)=>{
        const userToLogin = userServices.findByField("email", req.body.email)
            if(userToLogin){
            let isOkPassword = bcrypt.compareSync(req.body.password, userToLogin.password) 
            if(isOkPassword){
                delete userToLogin.password; /* borro la contraseña para que no quede en session */
                req.session.userLogged = userToLogin; /* guardo el usuario en session */

                if(req.body.rememberUser){
                    res.cookie("userEmail", req.body.email, {maxAge: 1000*5})
                }

                return res.redirect("perfil")

            } else{return res.send("las credenciales son invalidas")}

        } else{res.send("no existe ese email en nuestra db")}


        
    },
    getRegister: (req,res)=>{
        res.render("users/register");
    },
    profile: (req,res)=>{
        res.render("users/profile", {
            user: req.session.userLogged
        })
    },
    create: (req,res)=>{
        const user = {
          ...req.body,
          image: req.file ? req.file.filename : "default.png",
          password: bcrypt.hashSync(req.body.password, 10)
        };
        userServices.createUser(user);
        res.redirect("login")
    },

    logout: (req,res)=>{
        res.clearCookie("userEmail")
        req.session.destroy();
        return res.redirect("/")
    }
}