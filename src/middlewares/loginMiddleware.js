const {validationResult} = require("express-validator")

module.exports = (req,res,next)=>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.render("users/login", {
            errors: errors.mapped(),
            oldData: req.body
        });
    }
    next();
}