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
        const product = {
            name: req.body.name,
            image: req.file? req.file.filename : "default.png",
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            category: req.body.category
        };
        productService.create(product);
        res.redirect("products") /* en redirect va la url, no el archivo */
    },
    getEdit: (req,res)=>{
        const id = req.params.id
        const product = productService.getProductById(id)
        res.render("products/editProduct", {product})
    },
    edit: (req,res)=>{
        const product = req.body;
        const id = req.params.id;
        const file = req.file
        productService.edit(id,product,file);
        res.redirect("/products")
    },
    delete: (req,res)=>{
        const id = req.params.id
        productService.delete(id)
        res.redirect("/products")
    }
}