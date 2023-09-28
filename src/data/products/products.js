const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getAllProducts: function(){
        const productsFilePath = path.join(__dirname, "./productsDataBase.json"); /* traemos el JSON*/
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); /* traducimos lo que trajimos */
        return products;
    },
    saveProducts: function(products){
        const productsFilePath = path.join(__dirname,"./productsDataBase.json");
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2)); 
    },
    getProductById: function (id){
        const product = this.getAllProducts().find((product)=> product.id == id);
        return product;
    },
    create: function (product){
        const products = this.getAllProducts();
        const newProduct = {
            id: uuidv4(),
            ... product,
        }
        products.push(newProduct);
        this.saveProducts(products);
    }
    
}