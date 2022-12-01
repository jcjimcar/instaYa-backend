const mongoose=require('mongoose');

const ordenServicioSchema=mongoose.Schema({
    fecha:{type:String,required:true},//OJO cambiar a formato fecha
    hora:{type:String,required:true},//OJO cambiar a formato hora
    largo:{type:Number,required:true},
    ancho:{type:Number,required:true},
    alto:{type:Number,required:true},
    peso:{type:Number,required:true},
    dirRecoleccion:{type:String,required:true},
    ciudadRecoleccion:{type:String,required:true},
    destinatario:{type:String,required:true},
    idDestinatario:{type:String,required:true},
    dirEntrega:{type:String,required:true},
    ciudadEntrega:{type:String,required:true}
});
module.exports=mongoose.model("ordenServicio",ordenServicioSchema);