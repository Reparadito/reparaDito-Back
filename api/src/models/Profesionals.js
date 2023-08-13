const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Profesionals', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },     

    image: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING,
      unique: true,
    },

    tac: {
      type: DataTypes.BOOLEAN,
    },

    newsLetter: {
      type: DataTypes.BOOLEAN,
    },              
    userAdmin: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    profesion: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  );
};
