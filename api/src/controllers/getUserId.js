require("dotenv").config();
const { Users } = require("../db");

async function searchId(id) {
    let resultado = await Users.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
    }        
    });
    if (!resultado) throw new Error(`No existen usuarios con el id: ${id}`);

    return resultado;
  }


module.exports = { searchId };