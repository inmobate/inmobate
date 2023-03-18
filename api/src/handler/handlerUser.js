const newPostUser = require("./post/postUsers.js");
const newPostComment = require("./post/postComments.js");
const newPostPublication = require("./post/postPublications.js")
const{Op,Property,Type,Service}=require('../db')
const {getUser} = require('../controller/controllerUsers');
const {getComentario}  =require("../controller/controllerComment.js");
const {getReservas} = require('../controller/controllerBooking')
const {getPublication} = require('../controller/controllerpublicacion')
const {getVentas} = require('../controller/controllerSale')
const{propertyById}= require('../controller/controllerProperty')


const allProperty = async (req,res) => {
    const datos = await Property.findAll()
    const {city,province}=req.query
    if(city){
        let propertyCity = await Property.findAll({
            where:{
                city:{[Op.iLike]: city}
            }
            //falta incluir los modelos servicios y tipos para cuando 
            //busque una propiedad por ciudad  te muestre que tipo es y que servicios brinda
        })
        try {
        return res.status(200).json(propertyCity);
        } catch (error) {
            res.status(400).json({Error:error.menssage})
        }
    }else if(province){
        let propertyProvince = await Property.findAll({
            where:{
                province:{[Op.iLike]: province}
            }
            //falta incluir los modelos servicios y tipos para cuando 
            //busque una propiedad por ciudad  te muestre que tipo es y que servicios brinda
        })
        try {
        return res.status(200).json(propertyProvince);
        } catch (error) {
            res.status(400).json({Error:error.menssage})
        }
    }
    res.status(200).json(datos)
}

const allPropertyById = async (req,res) => {
    const {id} = req.params
        try {
        const datos = await propertyById(id)
            res.status(200).json(datos)
        } catch (error) {
            res.status(400).json({Error:"error.id no esta"})
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

const postUsers = (req,res) => {
    const { name, lastName, email, password } = req.body
    try {
        const newPost = newPostUser(name, lastName, email, password)
        res.status(200).json(newPost)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

const allComments = async (req,res) => {
    const comments = await getComentario()
    try {
        res.status(200).json({comentarios:comments})
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
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

const allPublications = async (req,res) => {
    const publicacion = await getPublication()
    try {
        res.status(200).json({publi:publicacion})
        
    } catch (error) {
        
    }
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
    postComments,
    allComments,
    allPublications,
    allProperty,
    postUsers,
    postPublications,
    allSale,
    allBooking,
    allType,
    allServicios,
    allReservas,
    allPropertyById
}

