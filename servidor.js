const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PUERTO = process.env.PUERTO || 3300
const mongoose = require('mongoose');

//CONEXION A BASE DE DATOS
require ('dotenv'). config ();
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a la Base de Datos');
  })
  .catch((err) => {
    console.log(err.message);
  });


// Assets
app.use(express.static('public'))


//Plantilla
app.use(expressLayout)
app.set('views', path.join(__dirname, '/recursos/vistas'))
app.set('view engine', 'ejs')

//Ruta homepage
require('./rutas/web')(app)

app.listen(PUERTO , () => {
    console.log(`La aplicación esta en linea ${PUERTO}`)
})


//BASE DE DATOS
