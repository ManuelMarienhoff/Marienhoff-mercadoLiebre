const productService = require("../services/productsService")

module.exports = {
    list: (req,res)=>{
        const products = productService.getAllProducts();
        res.render("products/productsList", {products})
    },
    detail: (req,res)=>{
        const id = req.params.id
        const product = productService.getProductById(id);
        res.render("products/productDetail", {product})
    },
    getCreate: (req,res)=>{
        res.render("products/createProduct")
    },
    create: (req,res)=>{
        const product = req.body
        productService.create(product);
        res.redirect("products") /* en redirect va la url, no el archivo */
    }
}