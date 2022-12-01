const express = require("express");
const mongoose = require("mongoose");
require ("dotenv").config();
const userRouters=require('./routes/users');


const app = express();
const port = process.env.PORT || 9000;

app.get("/",(req,res)=>{
    res.send("hola desarrollador");
})

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("conectado a la base dato"))
    .catch((error)=>console.error(error));


app.use(express.json());
app.use('/api',userRouters);

app.listen(port, ()=>{
    console.log("El servido se esta escuchando en el puerto ",port);
});