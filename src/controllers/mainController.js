const productService = require("../services/productsService")

module.exports = {
    home: function(req,res){
        const products = productService.getAllProducts();
        res.render("home", {products})
    }
};


