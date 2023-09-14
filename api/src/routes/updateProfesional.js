const { Profesionals } = require("../db");
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const updateProfesional = async (req, res) => {

  const { ...allProperties } = req.body;
  let id = allProperties.id;

  try {
    if (allProperties.user){
      const repeatProfesional =await Profesionals.findOne({
        where: {
          name: {[Op.eq]: allProperties.name},
        }
      })
      if (repeatProfesional) {
        return res.status(500).json({ message: `The user ${allProperties.name} is already assigned to another profesional.` });
      }
    }

    if (allProperties.email){
      const repeatEmail = await Profesionals.findOne({
        where: {
          email: {[Op.eq]: allProperties.email.toLowerCase()},
        }
      })
      if (repeatEmail) {
        return res.status(500).json({ message: `The email address is already associated with another account.` });
      }
    }

    if (allProperties.phone){
      const repeatPhone = await Profesionals.findOne({
        where: {
          phone: {[Op.eq]: allProperties.phone.toLowerCase()},
        }
      })
      if (repeatPhone) {
        return res.status(500).json({ message: `The phone is already associated with another account.` });
      }
    }

    const profesional = await Profesionals.findByPk(id);
    if (!profesional) {
      return res.status(404).json({ message: "Profesional no encontrado" });
    }
    if (allProperties.password) {
      const pass = await bcrypt.hash(allProperties.password, 10);
      allProperties.password = pass;
      delete allProperties.id;
      delete allProperties.password;
      //console.log(allProperties)
      const response= await profesional.update(allProperties);
      res.status(200).json(response );
    } else {
      delete allProperties.id;
      //console.log(allProperties)
      const response = await profesional.update(allProperties);
      res.status(200).json(response );
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

// module.exports = { updateUser };


const express = require("express");
const router = express.Router();
// const updateUser = require("../controllers/userController");

router.put("/", updateProfesional);

module.exports = router;