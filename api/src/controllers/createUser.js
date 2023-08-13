const { Users } = require("../db");
const bcrypt = require("bcrypt");

async function createUser({
  id,
  user,
  password,
  fullname,
  userAdmin,
  email,
  date,
  image,
  phone,
  tac,
  newsLetter,
  deleted,
}) {
  if (!user || !userAdmin || !email || !password)
    throw new Error("Los datos deben estar completos");

  // Verificar duplicados
  const existingUser = await Users.findOne({
    where: {
      id: id,
      user: user,
      email: email,
      phone: phone,
    },
  });
  if (existingUser) {
    throw new Error(
      "Ya existe un usuario con este email, phone, user o id"
    );
  }

  // Genera un hash de la contraseña utilizando bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    let resultado = await Users.create({
      id,
      user,
      password: hashedPassword,
      fullname,
      userAdmin,
      email,
      date,
      image,
      phone,
      tac,
      newsLetter,
      deleted,
    });
    return resultado;
  } catch (error) {
    //console.log(error.parent.detail)
    throw new Error(error.parent.detail);
  }
}

module.exports = { createUser };
