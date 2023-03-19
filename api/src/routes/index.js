const { Router } = require('express');
const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {allUsers,postUsers,postPublications,
    allPublications,allProperty, allSale,allBooking} = require('../handler/handlerUser.js');
const {postComments,allType,allServicios} = require('../handler/handlerUser');
//----------------------------------------------------------------
const {redirectHome, redirectLogin} = require('../middlewares/auth.js');
const {passport, authenticate} = require('../passport.js');
const jwt = require("jsonwebtoken");
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
//------------------------------Auth----------------------------------------------------------------


const {User} = require('../db.js');
router.get('/', (req, res) => {
    const { userId } = req.session;
  
    res.send(`
      <h1>Bienvenidos a Inmovate!</h1>
      ${userId ? `
        <a href='/home'>Perfil</a>
        <form method='post' action='/logout'>
          <button>Salir</button>
        </form>
        ` : `
        <a href='/login'>Ingresar</a>
        <a href='/register'>Registrarse</a>
        `}
    `)
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});

router.get('/login', redirectHome,  (req, res) => {
    res.send(`
      <h1>Iniciar sesión</h1>
      <form method='post' action='/login'>
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='Contraseña' required />
        <input type='submit' />
        <br/>
        <a href="/auth/google">Ingresar con google</a>
        <br/>
        <a href="/auth/facebook">Ingresar con Facebook</a>
      </form>
      <a href='/register'>Registrarse</a>
    `)
  });
router.post('/signup', redirectHome, (req, res) => {
  const { name, email, password } = req.body;

    if(name && email && password) {
        const exists = User.findAll(user => user.email === email);
        if(!exists) {
        const user = {
            name,
            email,
            password
        }
        User.Create(user)
        return res.redirect('/');
        }
    }
res.redirect('/signup')
});

router.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }), (req,res) => res.send(req.user),
  );

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
  router.get('/auth/facebook',
  passport.authenticate('facebook'),(req,res) => res.send(req.user));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { scope: ['email'] }, { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
  router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  })

module.exports = router;

//, 