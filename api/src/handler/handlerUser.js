const newPostUser = require("./post/postUsers.js");
const newPostComment = require("./post/postComments.js");
const newPostPublication = require("./post/postPublications.js")
const UpdateUser = require("./put/UpdateUser.js")
const updatePublication = require("./put/updatePublication.js")

const allUsers = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos los usuarios"})
}

const postUsers = async (req,res) => {
    const { name, lastName, email, password } = req.body
    try {
        const newPost = await newPostUser(name, lastName, email, password)
        res.status(200).send(newPost)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const putUsers = async (req,res) => {
    const { id, name, lastName, email, password } = req.body
    try {
        const newUser = await UpdateUser( id, name, lastName, email, password )
        res.status(200).send(newUser)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const allComments = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta mostramos  todos los comentarios"})
}

const postComments = async (req,res) => {
    const { content, id_user, id_publication } = req.body
    try {
        const newComment = await newPostComment(content, id_user, id_publication)
        res.status(200).send(newComment)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const allPublications = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos las publicaciones"})
}

const postPublications = async (req,res) => {
    const { active, description, picture, public_data, title, autor } = req.body
    try {
        const newPublication = await newPostPublication(active, description, picture, public_data, title, autor)
        res.status(200).send(newPublication)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const putPublications = async (req,res) => {
    const { active, description, picture, public_data, title, autor } = req.body
    try {
        const newPublication = await updatePublication(active, description, picture, public_data, title, autor)
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
    postUsers,
    putUsers,
    allComments,
    postComments,
    allPublications,
    postPublications,
    putPublications,
    allProperty,
    allSale,
    allBooking,
}