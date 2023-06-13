
function homeControlador() {
    return {
        async index(req, res) {
            res.render('home')
        }
    }
}

module.exports = homeControlador