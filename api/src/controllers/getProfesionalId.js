require("dotenv").config();
const { Profesionals } = require("../db");

async function searchId(id) {
    let resultado = await Profesionals.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
    }        
    });
    if (!resultado) throw new Error(`No existen profesionales con el id: ${id}`);

    return resultado;
  }


module.exports = { searchId };