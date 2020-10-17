
var login = (req, res, next) => {
    res.render('login');
}
var register = (req, res, next) => {
    res.render('register');
}
var admin = (req, res, next) => {
    res.render('admin');
}

module.exports = {
    login ,
    register,
    admin
}



