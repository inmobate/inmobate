const { Router } = require('express');
const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {allUsers,postUsers,postPublications,
    allPublications,allProperty, allSale,allBooking} = require('../handler/handlerUser.js');
const {postComments,allType,allServicios} = require('../handler/handlerUser');
const router = Router();

router.get('/property', allProperty)
router.get('/type', allType)
router.get('/servicio', allServicios)
router.get('/users', allUsers)
router.get('/publication', allPublications)
router.get('/sale',allSale)
router.get('/booking',allBooking)
router.post('/users', postUsers)
router.post('/comentarios',postComments)
router.post('/publication', postPublications)

module.exports = router;
