const newPostUser = require("./post/postUsers.js");
const newPostComment = require("./post/postComments.js");
const newPostPublication = require("./post/postPublications.js")
const{Property,Type,Service}=require('../db')
const {getUser} = require('../controller/controllerUsers');
const {getComentario}  =require("../controller/controllerComment.js");
const {getReservas} = require('../controller/controllerBooking')
const {getPublication} = require('../controller/controllerpublicacion')
const {getVentas} = require('../controller/controllerSale')
const UpdateUser = require("./put/UpdateUser.js")
const updatePublication = require("./put/updatePublication.js")

const allProperty = async (req,res) => {
    const datos = await Property.findAll()
    try {
        res.status(200).json(datos)
    } catch (error) {
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
        res.status(404).json({error:menssage})
    }
}

const allUsers = async (req,res) => {
    const users = await getUser()
    try {
        res.status(200).json({usuarrios :users})
    } catch (error) {
        res.status(400).json({Error:error.menssage})        
    }
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

const allPublications = async (req,res) => {
    const publicacion = await getPublication()
    try {
        res.status(200).json({publi:publicacion})
        
    } catch (error) {
        
    }
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
        const newPublication = newPostPublication(active, description, picture, public_data, rating, title, favorite)
        res.status(200).send(newPublication)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}


const allReservas = async (req,res) => {
    const reserva = await getReservas()
    try {
        res.status(200).json({booking:reserva})
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const allSale = async (req,res) => {
    const ventas = await getVentas()
    try {
        res.status(200).json({ventas:ventas})
    } catch (error) {
        res.status(400).json({Error: error.message}) 
    }
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
    allType,
    allServicios,
    allReservas,
}

