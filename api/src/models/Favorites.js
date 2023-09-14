const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Favorites", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    videogameId: {
      type: DataTypes.INTEGER,
    },
    usersId: {
      type: DataTypes.INTEGER,
    },
    isFav: {
      type: DataTypes.BOOLEAN,
    },
  });
};
