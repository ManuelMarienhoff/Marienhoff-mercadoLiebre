const express = require("express");

const app = express();

const path = require("path");

const PORT = 3001; 
app.listen(PORT, ()=>console.log(`Se creo el servidor ${PORT}`));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
})

app.use(express.static(path.join(__dirname, "../public")))

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})