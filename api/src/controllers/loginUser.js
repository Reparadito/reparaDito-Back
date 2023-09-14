const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {  Users, Videogame } = require("../db"); // Importa los modelos

const secretKey = "tu_clave_secreta"; // Reemplaza con tu clave secreta

async function login(user, password) {
  
  // Busca al usuario en la base de datos por su nombre de usuario
  let userDb = await Users.findOne({ where: { user } });
  console.log("userDb---->", userDb);
  let videogameDb = await Videogame.findOne({ where: { name: user } });
  console.log("videogameDb--->",videogameDb);
  
  try {
    // Si no se encuentra al usuario en Users o en Videogame por credenciales
    if (!userDb && !videogameDb) {
      // devuelve un error de autenticación
      return { success: false, message: "Credenciales inválidas" };
      }

    // Obtener la contraseña almacenada en la base de datos de Users o Videogame
    const storedPassword = userDb ? userDb.password : videogameDb.stock;
          // const storedPassword = userDb.password;

    // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
    const isPasswordValid = await bcrypt.compare(password, storedPassword);


    // Si la contraseña no coincide, devuelve un error de autenticación
    if (!isPasswordValid) {
      return { success: false, message: "Credenciales inválidas" };
    }

    let tokenData = {};
    if (userDb) {
      tokenData = { userId: userDb.id };
    } else {
      tokenData = { videogameId: videogameDb.id };
    }

    // Genera un token JWT para el User o Videogame
    // const tokenData = userDb ? { userId: userDb.id } : { videogameId: videogameDb.id };
    const token = jwt.sign(tokenData, secretKey, { expiresIn: "2h" });

      return {
      success: true,
      token: token,
      ...(userDb && {
        id: userDb.id,
        user: userDb.user,
        password: userDb.password,
        fullname: userDb.fullname,
        userAdmin: userDb.userAdmin,
        email: userDb.email,
        date: userDb.date,
        image: userDb.image,
      }),
      ...(videogameDb && {
        id: videogameDb.id,
        name: videogameDb.name,
        stock: videogameDb.stock,
        genre: videogameDb.genre,
        description: videogameDb.description,
        releaseDate: videogameDb.releaseDate,
        image: videogameDb.image,
      }),
    };


  } catch (error) {
    console.error("Error de autenticación:", error);
    return { message: "Error de autenticación" };
  }
}

module.exports = { login };

