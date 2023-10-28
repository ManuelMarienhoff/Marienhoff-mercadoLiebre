const userService = require("../services/usersService");
const bcrypt = require("bcryptjs");


module.exports = {
    getLogin:  (req,res)=>{
        res.render("users/login");
    },
    login: (req,res)=>{
        userService.login(req,res)
        res.redirect("perfil")        
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
        delete req.body.confirmPassword
        const user = {
          ...req.body,
          image: req.file ? req.file.filename : "default.png",
          password: bcrypt.hashSync(req.body.password, 10)
        };
        userService.createUser(user);
        res.redirect("login")
    },

    logout: (req,res)=>{
        res.clearCookie("userEmail")
        req.session.destroy();
        return res.redirect("/")
    }
}