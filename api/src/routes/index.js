const { Router } = require("express");

// Importar todos los routers;
const router = Router();

const createProfesional = require("./createProfesional");
const createUser = require("./createUser");
const loginUser = require("./loginUser")




// Configurar los routers
router.use("/profesional", createProfesional);
router.use("/user", createUser);
router.use("/user/login", loginUser)


module.exports = router;