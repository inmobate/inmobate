const {Publication} = require('../db')


const getPublication = async() => {
    const publicacion = await Publication.findAll()
    return publicacion
}

module.exports = {getPublication}