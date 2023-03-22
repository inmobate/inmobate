const { request } = require('express');
const { User } = require('../db')
const user = {}

const authTp = (req, res) => {
    user = req.user;
    const payload = {
            user: user.id,
            username: user.displayName,
            email: user.emails[0].value,
        };
    try {
        const userDataQuery = JSON.stringify({
            name: user.name.givenName,
            lastName: user.name.familyName,
            id: user.id,
            email: user.email
    });return userQuery
    
    
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
    
GOOGLE_URL_SUCCESS_LOGIN_REDIRECT_LOCAL ?  res.redirect(`${GOOGLE_URL_SUCCESS_LOGIN_REDIRECT_LOCAL}${userDataQuery}`) : res.redirect(`${GOOGLE_URL_SUCCESS_LOGIN_REDIRECT_DEPLOY}${userDataQuery}`)
    //let redirect = `http://localhost:3000/?user=`;

    request.redirect("/home");
}


module.exports = { authTp } 