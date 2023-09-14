const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // hace que el atributo "name" sea único
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: false, 
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
      unique: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    screenShots: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    stock: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
    },
    requeriments_en: {
      type: DataTypes.STRING,
    },
    requeriments_ru: {
      type: DataTypes.STRING,
    },    
  },
  );
};
