//Versión common js
//const express = require('express'); igual
////Versión import
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv/config' //es igual a

//import dotenv from 'dotenv'
//dotenv.config() // automaticamente lee .env
//console.log(process.env.DB_HOST)

const app = express();

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de Datos Conectada') )
    .catch( error => console.log(error));
// Definir puerto
const port = process.env.port || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener al año actual
app.use((req, res, next) => {
    res.locals.unaVariable = 'Variable local';
    const year = new Date();
    
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "AV";
    next();
});
//Agregar body parser
app.use(express.urlencoded({extended:true})); //permire usar req.body

//Definir la Carpeta Publica
app.use(express.static('public'));
//Agregar router
app.use('/', router); // use soporta post, delete, patch, get
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${ port }`);
});