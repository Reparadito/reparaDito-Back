const { Router } = require("express");

// Importar todos los routers;
const router = Router();

const getUsersNames = require("./getUserName");
const getUserId = require("./getUserId");
const updateUser = require("./updateUser");
const updateUserAdmin = require("./updateUserAdmin")
const createProfesional = require("./createProfesional");
const createUser = require("./createUser");
const loginUser = require("./loginUser")




// Configurar los routers
router.use("/user", getUsersNames);
router.use("/user", getUserId);
router.use("/user/update", updateUser);
router.use("/user/admin", updateUserAdmin);
router.use("/profesional", createProfesional);
router.use("/user", createUser);
router.use("/user/login", loginUser)


module.exports = router;