const newPostUser = require("./post/postUsers.js");
const newPostComment = require("./post/postComments.js");
const newPostPublication = require("./post/postPublications.js")


const allUsers = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos los usuarios"})
}

const postUsers = (req,res) => {
    const { name, lastName, email, password } = req.body
    try {
        const newPost = newPostUser(name, lastName, email, password)
        res.status(200).send(newPost)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const allComments = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta mostramos  todos los comentarios"})
}

const postComments = (req,res) => {
    const { content , id_user } = req.body
    try {
        const newComment = newPostComment(content, id_user)
        res.status(200).send(newComment)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const allPublications = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos las publicaciones"})
}

const postPublications = (req,res) => {
    const { active, description, picture, public_data, rating, title, favorite } = req.body
    try {
        const newPublication = newPostPublication(active, description, picture, public_data, rating, title, favorite)
        res.status(200).send(newPublication)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const allProperty = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos las propiedades"})
}

const allSale = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos las ventas"})
}
const allBooking = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos las reservas"})
}

module.exports = {
    allUsers,
    postComments,
    allComments,
    allPublications,
    allProperty,
    postUsers,
    postPublications,
    allSale,
    allBooking
}