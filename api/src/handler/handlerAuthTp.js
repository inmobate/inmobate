const { Router } = require('express');
// const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {allUsers,postUsers,postPublications,allPublications,allPropertyById,
    allProperty, allSale,allReservas,postComments,allServicios,allComments, 
    postProperty, postSale, postBooking, putUsers, putPublications, putProperty, alltype, deleteComments} = require('../handler/handlerUser.js');

//const {} = require('../middlewares/auth.js');
const authTp = require('../handler/handlerAuthTp');
const {passport, authenticate} = require('../passport.js');
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env 

const router = Router();

router.get('/property', allProperty)//lista
router.get('/property/:id', allPropertyById)//lista
router.post('/property', postProperty)
router.put('/property/:id', putProperty)

router.get('/type', alltype)//lista
router.get('/servicio', allServicios)//lista

router.get('/sale', allSale)//lista
router.post('/sale', postSale)

router.get('/booking',allReservas)//lista
router.post('/:id_property/booking', postBooking)

router.get('/users', allUsers)//lista
router.post('/users', postUsers)//lista
router.put('/users', putUsers)//lista

router.get("/comentarios", allComments)//lista
router.post('/:id_publication/comentarios', postComments)//lista
router.delete("/comentarios", deleteComments)// no le voy a hacer, comentarlo al grupo


router.get('/publication', allPublications)//lista
router.post('/:id_autor/publication', postPublications)// lista
router.put('/publication', putPublications)
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

router.post('/login', passport.authenticate('local', { session: false }), async (req, res) => {
  try{    
    let user=req.user;
   //Crear el token JWT con los datos del usuario.
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET_KEY,{expiresIn:"1d"})   
     //Enviar respuesta al cliente con el access_token
      return res.json({token})
  }
  catch(e){
    return  res.status(500).json({error:"Ha ocurrido un error."})
  }
});

router.get('/login',   (req, res) => {
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
      <a href='/signup'>Registrarse</a>
    `)
  });
router.post('/signup',  (req, res) => {
  const { name, lastName, email, password } = req.body;

    if(name && email && password && lastName ) {
        const exists = User.findAll(user => user.email === email);
        if(!exists) {
        const user = {
            name,
            lastName,
            email,
            password
        }
        User.Create(user)
        return res.redirect('/');
        }
    }
res.redirect('/signup')
});

router.get('/auth/google',passport.authenticate('google', { scope: ['email','profile'] }));

router.get('/auth/google/callback',passport.authenticate('google', { failureRedirect: '/login' }), (req,res ) => {
  const user = req.user
  payload = {
    id:user.id,
    email: user.email,
    name: user.name,
    lastName: user.lastName
  }
  token = jwt.sign( payload, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

  res.json({token})
});
router.get('/auth/facebook',passport.authenticate('facebook', { scope: ['email'] }), (req,res ) => {
  const user = req.user
  payload = {
    id:user.id,
    email: user.email,
    name: user.name,
    lastName: user.lastName
  }
  token = jwt.sign( payload, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

  res.json({token})
});

router.get('/auth/facebook/callback',passport.authenticate('facebook', { scope: ['email'] }, { failureRedirect: '/login' })
);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  })
  router.get('/home',  (req, res) => {
    const user = users.find(user => user.id === req.session.userId);
    
    res.send(`
      <h1>Bienvenido ${user.name}</h1>
      <h4>${user.email}</h4>
      <a href='/'>Inicio</a>
    `)
  });
module.exports = router;

//, 