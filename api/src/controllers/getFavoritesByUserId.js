const { Favorites } = require("../db");

async function serachIsFav(usersId) {
if(usersId){
// Buscar los favoritos asociados al userId dado
  const favorites = await Favorites.findAll({
    where: {usersId: usersId},
  });  
   
if (favorites.length === 0) {
    throw new Error(`No existen favoritos para el usuario con el id: ${usersId}`);
} 
return favorites;
} else {
    let allFavorites = await Favorites.findAll();
    return allFavorites;
}
}

module.exports = { serachIsFav };