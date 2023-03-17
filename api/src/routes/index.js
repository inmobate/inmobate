const { Router } = require('express');
// const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.get('/users', allUsers)
router.get('/property', allProperty)
router.get('/comments', allComments)
router.get('/publication', allPublications)
router.get('/sale',allSale)
router.get('/booking',allBooking)
router.post('/users', postUsers)
router.post('/comments', postComments)
router.post('/publication', postPublications)
router.put('/users', putUsers)
router.put('/publication', putPublications)
=========
const {allUsers,postUsers,postPublications,allPublications,allProperty, allSale,allReservas,postComments,allType,allServicios,allComments} = require('../handler/handlerUser.js');

const router = Router();

router.get('/property', allProperty)//lista
router.post('/property')
router.put('/property')

router.get('/type', allType)//lista
router.get('/servicio', allServicios)//lista

router.get('/sale',allSale)//lista
router.post('sale')

router.get('/booking',allReservas)//lista
router.post('/booking')

router.get('/users', allUsers)//lista
router.post('/users', postUsers)//lista

router.get("/comentarios",allComments)//lista
router.post('/comentarios',postComments)//lista
router.put("/comentarios")


router.get('/publication', allPublications)//lista
router.post('/publication', postPublications)// lista
router.put('/publication')
>>>>>>>>> Temporary merge branch 2

module.exports = router;
