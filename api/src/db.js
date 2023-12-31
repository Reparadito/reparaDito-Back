const { Sequelize } = require ("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();


const sequelize = new Sequelize(

  "postgres://postgres:mia081013@localhost:5432/ReparaDito",  
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Users, Favorites, Videogame, Reviews } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// Profesionals.belongsToMany(Users, { through: 'ProfesionalsUsers' });
// Users.belongsToMany(Profesionals, { through: 'ProfesionalsUsers' });
Users.belongsToMany(Videogame, { through: "UserVideogame" });
Videogame.belongsToMany(Users, { through: "UserVideogame" });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
