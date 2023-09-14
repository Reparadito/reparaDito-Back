const { Videogame } = require("../db");
const bcrypt = require("bcrypt");

async function createGame({
  id,
  name,
  releaseDate,  
  platforms,
  description,
  image,
  price,
  genre,
  screenShots,
  deleted,
  stock,
  tags,
  requeriments_en,
  requeriments_ru,
}) {
  if (!name || !platforms)
    throw new Error("El nombre y la plataforma deben estar completos");

      // Verificar duplicados
  const existingUser = await Videogame.findOne({
    where: {
      id: id,
      name: name,
      description: description,
      price: price,
    },
  });
  if (existingUser) {
    throw new Error(
      "Ya existe un Profesionales con este email, telefono, nombre o id"
    );
  }

    // Genera un hash de la contraseña utilizando bcrypt
    const hashedPassword = await bcrypt.hash(stock, 10);

    try {
      let resultado = await Videogame.create({
        id,
        name,
        releaseDate, 
        platforms,
        description,
        image,
        price,
        genre,
        screenShots,
        deleted,
        stock: hashedPassword,
        tags,
        requeriments_en,
        requeriments_ru,
      });
      return resultado
    } catch (error) {
          //console.log(error.parent.detail)
    throw new Error(error.parent.detail);
    }
  }


module.exports = { createGame };
