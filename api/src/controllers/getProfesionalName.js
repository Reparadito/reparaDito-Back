require("dotenv").config();
const { Profesionals } = require("../db");
const { Op } = require("sequelize");

async function searchDB(name) {
  if (!name) {
    let allProfesional = await Profesionals.findAll({
      where: {
        deleted: {
          [Op.eq]: false, // Solo traemos los profesionales que no estan baneados
        }
      }
    });
    if (allProfesional.length === 0) {
      return "message: No se encontraron profesionales en la Base de Datos";
    }
    return allProfesional;
  } else {
    let ProfesionalName = await Profesionals.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
        deleted: false //si le pasan profesional pasa solo los que deleted estan false
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    });
    if (ProfesionalName.length === 0) {
      return `No se encontraron profesionales con el nombre: ${name}`;
    }
    return ProfesionalName;
  }
}

// async function allProfesionalesAdmin() {
//   try {
//     let allProfesional = await Profesionals.findAll();
//     if (allProfesional.length === 0) {
//       throw new Error("No user found");
//     }
//     return allProfesional;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };


module.exports = { searchDB };