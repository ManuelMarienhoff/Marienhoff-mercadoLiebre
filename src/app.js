/* *************** Require's *********************** */
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

/* *************** Template Engine **************** */
app.set("view engine", "ejs")
app.set("views", "./src/views")

/* *************** Middlewares ******************** */
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.urlencoded({extended:false})); 
app.use(express.json()) /* estos 2 nos permite capturar en req.body la info de un formulario que se envia via post */
app.use(methodOverride("_method")) /* para poder usar metodos put y delete */

/* **************** Routes **************************/
const mainRouter = require("./routes/mainRouter")

app.use("/", mainRouter);

/* *************** Server ******************** */
const PORT = process.env.PORT || 3001; 
app.listen(PORT, ()=>console.log(`Se creo el servidor ${PORT}`));