const express=require("express");
const ordenServicioSchema=require('../models/ordenServicio');

const router=express.Router();
// rigistrar o crear usuarios
router.post("/ordenServicios",(req,res)=>{
    const ordenServicio = ordenServicioSchema(req.body);
    ordenServicio
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
});

//obtener todos los usuario
router.get("/ordenServicios/",(req,res)=>{
    ordenServicioSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//obtener un usuario
router.get("/ordenServicios/:id",(req,res)=>{
    const {id}=req.params;
    ordenServicioSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//actualizar un usuario
router.put("/ordenServicios/:id",(req,res)=>{
    const {id}=req.params;
    const {fecha,hora,largo,ancho,alto,peso,dirRecoleccion,ciudadRecoleccion,destinatario,idDestinatario,dirEntrega,ciudadEntrega}=req.body
    ordenServicioSchema
    .updateOne({_id:id},{$set:{fecha,hora,largo,ancho,alto,peso,dirRecoleccion,ciudadRecoleccion,destinatario,idDestinatario,dirEntrega,ciudadEntrega}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//eliminar un usuario
router.delete("/ordenServicios/:id",(req,res)=>{
    const {id}=req.params;
    ordenServicioSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

module.exports=router;