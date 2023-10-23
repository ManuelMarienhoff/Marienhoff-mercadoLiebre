const userServices = require("../services/usersService");
const userService = require("../services/usersService")

module.exports = {
    getLogin: function (req,res){
        res.render("users/login");
    },
    login: (req,res)=>{


    },
    getRegister: function(req,res){
        res.render("users/register");
    },
    profile: (req,res)=>{
        res.render("users/userProfile")
    },
    create: (req,res)=>{
        console.log(req.body)
        const user = {
          name: req.body.name,
          surname: req.body.surname,
          username: req.body.username,
          email: req.body.email,
          birthdate: req.body.birthdate,
          address: req.body.address,
          userProfile: req.body.userProfile,
          image: req.file ? req.file.filename : "default.png",
          password: req.body.password,
        };
        console.log(user)
        userServices.createUser(user);
        res.redirect("/")
    }
}