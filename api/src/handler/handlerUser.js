

const{Property}=require('../db')



const allProperty = async (req,res) => {
    const datos = await Property.findAll()
    try {
        res.status(200).json(datos)
    } catch (error) {
        res.status(404).json({error:menssage})
    }
}










const allUsers = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos los usuarios"})
}

const postUsers = (req,res) => {
    res.status(200).json({mensaje:"creamos nuevos usuarios"})
}


const postComentarios = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta los usuarios crean sus todos los comentarios"})
}
const allComentarios = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta mostramos  todos los comentarios"})
}

const allPublications = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos las publicaciones"})
}
const postPublications = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta creamos las publicaciones"})
}


const allSale = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos las ventas"})
}
const allBooking = (req,res) => {
    res.status(200).json({mensaje:"en esta ruta veremos todos las reservas"})
}
module.exports = {
    allUsers,
    postComentarios,
    allComentarios,
    allPublications,
    allProperty,
    postUsers,
    postPublications,
    allSale,
    allBooking
}