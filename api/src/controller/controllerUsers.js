const {User} = require('../db')


const getUser = async() => {
    const usuarios = await User.findAll()
    return usuarios
}

module.exports = {getUser}