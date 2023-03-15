const { Router } = require('express');
const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {allUsers,postUsers,allComentarios,postPublications,
    allPublications,allProperty, allSale,allBooking} = require('../handler/handlerUser.js');

const router = Router();

router.get('/users', allUsers)
router.get('/property', allProperty)
router.get('/comentarios', allComentarios)
router.get('/publication', allPublications)
router.get('/sale',allSale)
router.get('/booking',allBooking)
router.post('/user', postUsers)
router.post('/comentarios', allComentarios)
router.post('/publication', postPublications)

module.exports = router;
