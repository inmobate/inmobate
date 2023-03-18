const { Router } = require('express');
// const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {allUsers,postUsers,postPublications,allPublications,allPropertyById,
    allProperty, allSale,allReservas,postComments,allType,allServicios,allComments, postProperty, postSale, postBooking, putUsers, putPublications} = require('../handler/handlerUser.js');

const router = Router();

router.get('/property', allProperty)//lista
router.get('/property/:id', allPropertyById)//lista
router.post('/property', postProperty)
router.put('/property', )

router.get('/type', allType)//lista
router.get('/servicio', allServicios)//lista

router.get('/sale', allSale)//lista
router.post('sale', postSale)

router.get('/booking',allReservas)//lista
router.post('/booking', postBooking)

router.get('/users', allUsers)//lista
router.post('/users', postUsers)//lista
router.put('/users', putUsers)//lista

router.get("/comentarios",allComments)//lista
router.post('/comentarios',postComments)//lista
router.put("/comentarios", )// no le voy a hacer, comentarlo al grupo


router.get('/publication', allPublications)//lista
router.post('/publication', postPublications)// lista
router.put('/publication', putPublications)

module.exports = router;
