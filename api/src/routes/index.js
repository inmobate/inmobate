const { Router } = require('express');
// const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

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

module.exports = router;
