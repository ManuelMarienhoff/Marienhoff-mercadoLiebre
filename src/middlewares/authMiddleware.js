
module.exports = (req,res,next)=>{
    if(!req.session.userLogged){
        res.redirect("login")
    } else {next();}
    
}