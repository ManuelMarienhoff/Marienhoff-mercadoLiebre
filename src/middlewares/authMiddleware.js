
module.exports = (req,res,next)=>{
    if(!req.session.userLogged){
        res.redirect("login")
    }
    next();
}