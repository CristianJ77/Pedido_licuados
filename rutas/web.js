const homeControlador = require('../app/http/controladores/homeControlador')
const authControlador = require('../app/http/controladores/authControlador')
const carritoControlador = require('../app/http/controladores/clientes/carritoControlador')


//Función para llamar a las rutas de navegación
function inicioRutas(app) {
    app.get('/', homeControlador().index)
    app.get('/cart', carritoControlador().index)
    app.get('/login', authControlador().login)
    app.get('/register', authControlador().register)
}

module.exports = inicioRutas