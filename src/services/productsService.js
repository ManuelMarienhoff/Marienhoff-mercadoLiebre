const db = require("../data/db")

module.exports = {
    getAllProducts : function(){
        return db.products.getAllProducts();
    },
    getProductById: function (id){
        return db.products.getProductById(id);
    },
    create: function(product){
        db.products.create(product);
    }
}