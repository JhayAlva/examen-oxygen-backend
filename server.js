require('dotenv').config();
const express = require('express');
const pipeline = require('./config_server/middlewares');
const mongoose = require('mongoose');

var servidorWeb = express();
pipeline(servidorWeb);

servidorWeb.listen(3000,(err)=>{
        if(!err){
            console.log('...servidor escuchando el puerto 3000');
        }else{
            console.log('Error al lanzar servidor web');
        }
})

mongoose.connect(process.env.URL_MONGODB)
        .then(()=>console.log('....se ha conectado a MongoDB...'))
        .catch((error)=>console.log('error al contectarse MongoDB: ',error));