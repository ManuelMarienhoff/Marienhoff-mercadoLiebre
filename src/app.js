const express = require("express");

const app = express();

const path = require("path");

const PORT = 3001; 
app.listen(PORT, ()=>console.log(`Se creo el servidor ${PORT}`));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
})

app.use(express.static(path.join(__dirname, "../public")))