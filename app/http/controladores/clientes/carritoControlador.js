function carritoControlador() {
    return {
        async index(req, res) {
            res.render('clientes/carrito')
        }
    }
}

module.exports = carritoControlador