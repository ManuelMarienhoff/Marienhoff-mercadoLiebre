/* *************** Require's *********************** */
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session")
const cookieParser = require("cookie-parser")



/* *************** Template Engine **************** */
app.set("view engine", "ejs")
app.set("views", "./src/views")

/* *************** Middlewares ******************** */
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.urlencoded({extended:false})); 
app.use(express.json()) /* estos 2 nos permite capturar en req.body la info de un formulario que se envia via post */
app.use(methodOverride("_method")) /* para poder usar metodos put y delete */
app.use(session(
    {secret: "texto unico de session",
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser())

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")
app.use(userLoggedMiddleware) /* tiene que ir despues de session y cookies*/

/* **************** Routes **************************/
const mainRouter = require("./routes/mainRouter")

app.use("/", mainRouter);

/* *************** Server ******************** */
const PORT = process.env.PORT || 3001; 
app.listen(PORT, ()=>console.log(`Se creo el servidor ${PORT}`));