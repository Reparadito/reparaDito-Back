const { Router } = require("express");
const express = require("express");
const { login } = require ('../controllers/loginUser')

const router = Router();
router.use(express.json());

const secretKey = 'tu_clave_secreta'; // Reemplaza esto con tu clave secreta real


// Ruta para iniciar sesión
router.post('/', async (req, res) => {
    
  let { user, password } = req.body;
    try {

      let authResult  = await login(user, password)

    // Enviar el token al frontend
    if (authResult.success) {
      res.status(200).json(authResult);
    } else {
      res.status(401).json(authResult);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

module.exports = router;
