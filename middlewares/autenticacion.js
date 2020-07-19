
const autenticateUser = (req, res, next) => {
console.log('autenticateUser');
    if (req.user) {
        if (req.user.username == 'Administrador') {
            next();
        } else {
            res.render("no-autorizado");
        }
    }
}

module.exports = {
    autenticateUser
}