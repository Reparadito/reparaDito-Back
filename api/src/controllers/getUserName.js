require("dotenv").config();
const { Users } = require("../db");
const { Op } = require("sequelize");

async function searchDB(user) {
  if (!user) {
    let allUsers = await Users.findAll({
      where: {
        deleted: {
          [Op.eq]: false, // Solo traemos los usuarios que no estan baneados
        }
      }
    });
    if (allUsers.length === 0) {
      return "message: No se encontraron usuarios en la Base de Datos";
    }
    return allUsers;
  } else {
    let UserName = await Users.findAll({
      where: {
        user: { [Op.iLike]: `%${user}%` },
        deleted: false //si le pasan user pasa solo los que deleted estan false
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    });
    if (UserName.length === 0) {
      return `No se encontraron usuarios con el nombre: ${user}`;
    }
    return UserName;
  }
}

async function allUserAdmin() {
  try {
    let allUsers = await Users.findAll();
    if (allUsers.length === 0) {
      throw new Error("No user found");
    }
    return allUsers;
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports = { searchDB, allUserAdmin };
