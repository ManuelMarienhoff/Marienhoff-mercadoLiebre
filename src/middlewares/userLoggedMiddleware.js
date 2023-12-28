const userServices = require("../services/usersService");

module.exports = async function (req,res,next){
    res.locals.isLogged = false  /* res.locals son variables que puedo compartir a todas las vistas indistintamente del controlador */
    
    if(req.cookies.userEmail){

        let emailCookie = req.cookies.userEmail;
        let userCookie = await userServices.findByEmail(emailCookie)
    
        if(userCookie){
            req.session.userLogged = userCookie
            if(req.session.userLogged){
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged /* paso el session a una variable en locals para usarlo globalmente en las vistas */
            }
        }
    } else{
        next()
    }
}
/* Entonces en la vista ponemos <% if(!locals.isLogged){
    mostramos lo que queremos que muestre si estamos deslogueados
} */
