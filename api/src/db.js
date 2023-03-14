require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/inmovate`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User,Sale,Publication,Comentario,Booking,Property } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.hasMany(Publication,{foreignKey:"autorId"});
Publication.belongsTo(User,{as: "autor"})

User.hasMany(Booking,{as: "reservas", foreignKey:"autor_resId"})
Booking.belongsTo(User,{as: "autor_res"})

Sale.hasMany(Booking,{as:"reservas", foreignKey :"autor_venId"})
Booking.belongsTo(Sale,{as:"autor_ven"})

Publication.hasMany(Comentario,{foreignKey:"publicId"})
Comentario.belongsTo(Publication,{as:"public"})

User.hasMany(Comentario,{foreignKey:"autor_comiId"})
Comentario.belongsTo(User,{as:"autor_comi"})

Booking.hasOne(Property,{as:"propiedades",foreignKey:"bookinId"})
Property.belongsTo(Booking,{as:"reservas",foreignKey:"bookinId"})

Sale.hasOne(Property,{as:"propiedades",foreignKey:"saleId"})
Property.belongsTo(Sale,{as:"ventas",foreignKey:"saleId"})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Op
};
