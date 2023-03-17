const { Router } = require('express');
const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {allUsers,
    postComments,
    allComments,
    allPublications,
    allProperty,
    postUsers,
    postPublications,
    allSale,
    allBooking} = require('../handler/handlerUser.js');

const router = Router();

router.get('/users', allUsers)
router.get('/property', allProperty)
router.get('/comments', allComments)
router.get('/publication', allPublications)
router.get('/sale',allSale)
router.get('/booking',allBooking)
router.post('/users', postUsers)
router.post('/comments', postComments)
router.post('/publication', postPublications)

module.exports = router;
