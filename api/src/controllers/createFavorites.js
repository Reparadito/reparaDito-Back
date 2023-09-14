const { Favorites, Videogame, Users } = require("../db");

async function createFavorite({ videogameId, usersId, isFav }) {
  // Verificar si el profesional existe en la base de datos
  const profesional = await Videogame.findByPk(videogameId);
  if (!profesional) {
    throw new Error(`Profesional con ID: ${videogameId}, no encontrado`);
  }
  // Verificar si el usuario existe en la base de datos
  const user = await Users.findByPk(usersId);
  if (!user) {
    throw new Error(`Usuario con ID: ${usersId}, no encontrado`);
  }
  // Si existe profesional y usuario, crea un nuevo item con el favorito enviado
  const existingFavorite = await Favorites.findOne({
    where: {
      usersId: usersId, // Reemplaza usersId con el valor real del usuario que deseas buscar
      videogameId: videogameId // Reemplaza profesionalsId con el valor real del profesional que deseas buscar
    }
  });

  if (existingFavorite) {
    const cambio = await Favorites.update({ isFav: isFav }, {
      where: {
        id: existingFavorite.id
      },
    })
    if (cambio > 0) {
      const updateFav = await Favorites.findByPk(existingFavorite.id);
      console.log("se encontro fav")
      return updateFav
    }

  } else {
    try {
      let favorite = await Favorites.create({
        videogameId,
        usersId,
        isFav,
      })
      return favorite
    } catch (error) {
      console.log(error);
      return new Error('Ha ocurrido un error al agregar el favorito');
    }
  }
}

module.exports = { createFavorite };
