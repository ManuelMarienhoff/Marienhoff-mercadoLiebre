const usersService = require("../services/usersService");


module.exports = {
    getLogin:  (req,res)=>{
        res.render("users/login");
    },
    login: (req,res)=>{
        usersService.login(req,res)
        console.log(req.session.userLogged)
        res.redirect("/")        
    },
    getRegister: (req,res)=>{
        res.render("users/register");
    },
    profile: (req,res)=>{
        res.render("users/profile", {user: req.session.userLogged})
    },
    create: (req,res)=>{
        delete req.body.confirmPassword
        usersService.create(req.body, req.file);
        res.redirect("login")
    },
    delete:(req,res)=>{
        usersService.delete(id)
        res.redirect("/")
    },

    logout: (req,res)=>{
        // res.clearCookie("userEmail")
        // req.session.destroy();
        return res.redirect("/")
    }
}