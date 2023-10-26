const {validationResult} = require("express-validator")

module.exports = (req,res,next)=>{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        res.render("users/register",{
            errors: errors.mapped(),
            oldData: req.body
        })
    }else{next()}
    
}