function authControlador() {
    return {
        login(req, res) {
            res.render('auth/login')
        },
        register(req, res) {
            res.render('auth/registro')
        }
    }
}

module.exports = authControlador