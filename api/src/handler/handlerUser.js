<<<<<<< HEAD
const newPostUser = require("./post/postUsers.js");
const newPostComment = require("./post/postComments.js");
const newPostPublication = require("./post/postPublications.js")
const{Property,Type,Service}=require('../db')
=======


const{Property}=require('../db')
>>>>>>> c87b0e03dc41282d926702868a70d234c9c6a5ec



const allProperty = async (req,res) => {
    const datos = await Property.findAll()
    try {
        res.status(200).json(datos)
    } catch (error) {
<<<<<<< HEAD
        res.status(400).json({Error:error.menssage})
    }
}

const allType = async (req,res) => {
    const tipos = await Type.findAll()
    try {
        res.status(200).json(tipos)
    } catch (error) {
        res.status(400).json({Error:error.menssage})
    }
}

const allServicios = async (req,res) => {
    const servicios = await Service.findAll()
    try {
        res.status(200).json(servicios)
    } catch (error) {
        res.status(400).json({Error:error.menssage})
=======
        res.status(404).json({error:menssage})
>>>>>>> c87b0e03dc41282d926702868a70d234c9c6a5ec
    }
}


<<<<<<< HEAD
=======








>>>>>>> c87b0e03dc41282d926702868a70d234c9c6a5ec
const allUsers = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos los usuarios"})
}

const postUsers = (req,res) => {
    const { name, lastName, email, password } = req.body
    try {
        const newPost = newPostUser(name, lastName, email, password)
        res.status(200).json(newPost)
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
    const { active, description, picture, public_data, autor, title } = req.body
    try {
        const newPublication = newPostPublication(active, description, picture, 
            public_data, title, autor)
        res.status(200).json(newPublication)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

<<<<<<< HEAD

=======
>>>>>>> c87b0e03dc41282d926702868a70d234c9c6a5ec

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
    allBooking,
    allType,
    allServicios
}

