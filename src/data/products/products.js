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
    },
    edit: function(id,product,file){
        const products = this.getAllProducts();
        // const productToEdit = this.getProductById(id);    /* con esto no lo cambiaba xq no lo sacaba de products (el array de objetos)*/
        const productToEdit = products.find((product) => product.id == id); /* solo asi cambia el producto en el JSON */
        productToEdit.name = product.name;
        productToEdit.price = Number(product.price);
        productToEdit.discount = Number(product.discount);
        if(file){
            productToEdit.image = file.filename;

            /* funcion para borrar imagen vieja */
            let oldImage = this.getProductById(id).image
            
            
            this.deleteImage(oldImage);

        } else{
            productToEdit.image = this.getProductById(id).image;
            
        }
        this.saveProducts(products);
        return product;
    },
    deleteImage: function(image){
        fs.unlinkSync(
          path.join(__dirname, "../../../public/img/products/" + image)
        );
    },
    delete: function(id){
        const products = this.getAllProducts();
        let deletedProductImage = this.getProductById(id).image
        this.deleteImage(deletedProductImage)
        const remainingProducts = products.filter((product)=> product.id != id);
        this.saveProducts(remainingProducts);
    }
    
}