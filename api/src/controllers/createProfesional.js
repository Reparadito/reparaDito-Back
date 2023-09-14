const { Profesionals } = require("../db");
const bcrypt = require("bcrypt");

async function createProfesional({
  id,
  name,
  fullname,
  password,
  email,
  date,
  image,
  phone,
  tac,
  newsLetter,
  userAdmin,
  profesion,
  deleted,
}) {
  if (!name || !userAdmin || !email || !password || !profesion) {
    throw new Error("Los datos deben estar completos");
  }

  // Verificar duplicados
  const existingProfesional = await Profesionals.findOne({
    where: {
      id: id,
      name: name,
      email: email,
      phone: phone,
    },
  });
  if (existingProfesional) {
    throw new Error(
      "Ya existe un profesional con este email, phone, name o id"
    );
  }

  // Genera un hash de la contraseña utilizando bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    let resultado = await Profesionals.create({
      id,
      name,
      fullname,
      password: hashedPassword,
      email,
      date,
      image,
      phone,
      tac,
      newsLetter,
      userAdmin,
      profesion,
      deleted,
    });
    console.log("Controller--->",resultado);
    return resultado;
  } catch (error) {
    console.log(error)
    // throw new Error(error.parent.detail);
  }
}

module.exports = { createProfesional };
