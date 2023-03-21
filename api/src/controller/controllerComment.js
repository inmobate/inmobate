const {Comment} = require('../db')


const getComentario = async() => {
    const comentarios = await Comment.findAll()
    return comentarios
}

module.exports = {getComentario}