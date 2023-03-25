const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
<<<<<<< HEAD
const passport = require('passport')


require('./db.js');
=======
const session = require('express-session');
>>>>>>> ed90455a2c5e1b3fa7a020292a9180f963ad6a89

require("./db.js");

const server = express();

server.name = "API";

<<<<<<< HEAD
//server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

server.use(morgan('dev'));
=======
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
>>>>>>> ed90455a2c5e1b3fa7a020292a9180f963ad6a89
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
<<<<<<< HEAD
})
server.use(express.urlencoded({ extended: true }));
server.use(passport.initialize());


//--------------------------------------
server.use('/', routes);
=======
});

// uso de session y passpport -----------------------
/* server.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: true,
    //   genid: function(req) {
    //return genuuid() // use UUIDs for session IDs
  },  
  })
);
// server.use(passport.initialize());

 */ //--------------------------------------
server.use("/", routes);
>>>>>>> ed90455a2c5e1b3fa7a020292a9180f963ad6a89

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
