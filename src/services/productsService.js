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
    },
    edit: function(id,product,file){
        db.products.edit(id,product,file);
    },
    delete: function(id){
        db.products.delete(id)
    }
}