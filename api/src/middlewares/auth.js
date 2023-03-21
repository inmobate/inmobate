const session = require('express-session');


const redirectLogin = (req, res, next) => {

    if(!req.session.userId) {
        res.redirect('/login');
    } else {
        next();
    }
};

const redirectHome = (req, res, next) => {

    if(req.session.userId) {
    res.redirect('/home');
    } 
    else {
        next();
    }
};
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
};

module.exports = { redirectLogin, redirectHome, isAuthenticated}