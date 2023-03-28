<<<<<<< HEAD
  const { Router } = require("express");
  // const multer  = require('multer');
  // Importar todos los routers;
  // Ejemplo: const authRouter = require('./auth.js');
  const {
    allUsers,
    postUsers,
    postPublications,
    allPublications,
    allPropertyById,
    allProperty,
    allSale,
    allReservas,
    postComments,
    allServicios,
    allComments,
    postProperty,
    postSale,
    postBooking,
    putUsers,
    putPublications,
    putProperty,
    alltype,
    deleteComments,
    deletePublication,
    deleteUser,
    getAdmin,
    deleteAdmin,
  } = require("../handler/handlerUser.js");


  const {passport, authenticate} = require('../passport.js');
  const jwt = require("jsonwebtoken");
  const { JWT_SECRET_KEY } = process.env 

  const router = Router();

  router.get("/property", allProperty); //lista
  router.get("/property/:id", allPropertyById); //lista
  router.post("/property", postProperty);
  router.put("/property/:id", putProperty);

  router.get("/type", alltype); //lista
  router.get("/service", allServicios); //lista

  router.get("/sale", allSale); //lista
  router.post("/sale", postSale);

  router.get("/booking", allReservas); //lista
  router.post("/:id_property/booking", postBooking);

  router.get("/users", allUsers); //lista
  router.post("/users", postUsers); //lista
  router.put("/users", putUsers); //lista
  router.delete("/:id/users", deleteUser); //lista

  router.get("/comentarios", allComments); //lista
  router.post("/:id_publication/comentarios", postComments); //lista
  router.delete("/:id/comentarios", deleteComments); // no le voy a hacer, comentarlo al grupo

  router.get("/publication", allPublications); //lista
  router.post("/:id_autor/publication", postPublications); // lista
  router.put("/publication", putPublications);
  router.delete("/:id/publication", deletePublication);

  router.get("/admin/get?=", getAdmin);
  router.delete("/admin/remove?=/:id", deleteAdmin);

  //------------------------------Auth----------------------------------------------------------------

  const { User } = require("../db.js");

  router.post('/login', passport.authenticate('local'), (req, res) => {
    try{    
      let user=req.user;
    //Crear el token JWT con los datos del usuario.
      const token = jwt.sign(user, process.env.JWT_SECRET_KEY,{expiresIn:"1d"})   
      //Enviar respuesta al cliente con el access_token
        return res.json(token)
    }
    catch(e){
      return  res.status(500).json({error:"Ha ocurrido un error."})
    }
=======
const { Router } = require("express");
// const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  allUsers,
  postUsers,
  postPublications,
  allPublications,
  allPropertyById,
  allProperty,
  allSale,
  allReservas,
  postComments,
  allServicios,
  allComments,
  postProperty,
  postSale,
  postBooking,
  putUsers,
  putPublications,
  putProperty,
  alltype,
  deleteComments,
  deletePublication,
  deleteUser,
  getAdmin,
  deleteAdmin,
} = require("../handler/handlerUser.js");
const {
  createOrden,
  capturarOrden,
  cancelarOrden,
} = require("../metodo_de_pagos/paypal");
const { redirectHome, redirectLogin, authenticateToken } = require("../middlewares/auth.js");

const {passport, authenticate} = require('../passport.js');
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env 

const router = Router();

router.get("/property", allProperty); //lista
router.get("/property/:id", allPropertyById); //lista
router.post("/property", postProperty);// lista
router.put("/property/:id", putProperty);// lista

router.get("/type", alltype); //lista
router.get("/servicio", allServicios); //lista
//-------------------------------------------------
router.get("/sale", allSale); //lista
router.post("/sale", postSale);// ruta pendiente por revisar y definir que va hacer 
//-------------------------------------------------
router.get("/booking", allReservas); //lista
router.post("/:id_property/booking", authenticateToken, postBooking);//lista

router.get("/users", allUsers); //lista
router.post("/users", postUsers); //lista
router.put("/users/:id", putUsers); //lista
router.delete("/:id/users", deleteUser); //lista

router.get("/comentarios", allComments); //lista
router.post("/:id_publication/comentarios", postComments); //lista
router.delete("/:id/comentarios", deleteComments); // no le voy a hacer, comentarlo al grupo

router.get("/publication", allPublications); //lista
router.post("/:id_autor/publication", postPublications); // lista
router.put("/publication", putPublications);
router.delete("/:id/publication", deletePublication);

router.get("/admin/get?=", getAdmin);
router.delete("/admin/remove?=/:id", deleteAdmin);

//------------------------------Auth----------------------------------------------------------------

const { User } = require("../db.js");


router.post("/login", passport.authenticate("local"), (req, res) => {
  try {
    let user = req.user;
    //Crear el token JWT con los datos del usuario.
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName
    };
    const token = jwt.sign(payload, "contraseña ", {
      expiresIn: "1d",
    });
    //Enviar respuesta al cliente con el access_token
    return res.json(token);
  } catch (e) {
    return res.status(500).json({ error: "Ha ocurrido un error." });
  }
});

router.get('/login',  (req, res) => {
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
router.post("/signup", (req, res) => {
  const { name, lastName, email, password } = req.body;

  if (name && email && password && lastName) {
    const exists = User.findAll((user) => user.email === email);
    if (!exists) {
      const user = {
        name,
        email,
        password,
      };
      User.Create(user);
      return res.redirect("/");
    }
  }
  res.redirect("/signup");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  (req, res) => {
    const user = req.user;
    payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
    };
    token = jwt.sign(payload, "process.env.JWT_SECRET_KEY", { expiresIn: "1d" });

    res.json( token );
  }
);

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
>>>>>>> a7117258de5a0d33b06c56b5bc56414fe19d10b5
  });

  router.get('/login',  (req, res) => {
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
<<<<<<< HEAD
  router.post('/signup',  (req, res) => {
    const { name, lastName, email, password } = req.body;

      if(name && email && password && lastName ) {
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

  router.get('/auth/google', passport.authenticate('google', { scope: ['email','profile'] }));

  router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', successRedirect :'/'}), (req, res ) => {
      const user = req.user
      payload = {
        id:user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName
      }
      token = jwt.sign( payload, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
      res.cookie('token', token, { httpOnly: true, maxAge: 86400000 });
=======
  })
//----------------------------------------paypal-----------------------------------

router.post("/create-order/:id", createOrden);

router.get("/capture-order", capturarOrden);

router.get("/cancel-order", cancelarOrden);
module.exports = router;
>>>>>>> a7117258de5a0d33b06c56b5bc56414fe19d10b5

      // Redirige al usuario a la página principal de tu aplicación

      
    });
    router.get('/auth/facebook',passport.authenticate('facebook', { scope: ['email'] }));
    
    router.get('/facebook/callback',passport.authenticate('facebook', { scope: ['email'] }, 
      { failureRedirect: '/login' }, 
      { successRedirect: '/success' }
    ));

  router.post('/logout', function(req, res, next) {
      req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
    })
    router.get('/successes',(req,res) => res.json(req.token));
  module.exports = router;

  //,
