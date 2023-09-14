const { Router } = require("express");

// Importar todos los routers;
const router = Router();

const getGamesNameRouter = require("./getGamesName");
const postGamesRouter = require("./postGames");
const getGamesIdRouter = require("./getGamesId");
const putGameRouter = require("./putGame");
const registroRouter = require('./mailregistro');
const forgotPassword = require("./forgotPassword");
const createUser = require("./createUser");
const getUsersNames = require("./getUserName");
const getUserId = require("./getUserId");
const updateUser = require("./updateUser");
const updateUserAdmin = require("./updateUserAdmin")
const loginUser = require("./loginUser")
// const createProfesional = require("./createProfesional");
// const getProfesional = require("./getProfesionalName");
// const getProfesionalId = require("./getProfesionalId")
// const updateProfesional = require("./updateProfesional");
const loginGoogles = require("./loginGoogles");
const createFavorite = require("./createFavorites")
const getAllFavorites = require("./getAllFavorites")
const getFavoriteUserId = require("./getFavoritesByUserId")
const reviews = require("./reviews")
const getReviews = require("./getReviews")
const putReview = require("./putReview")



// Configurar los routers
router.use("/games", getGamesNameRouter);
router.use("/games/update", putGameRouter);
router.use("/games", postGamesRouter);
router.use("/games", getGamesIdRouter);
router.use(registroRouter);
router.use("/forgotPassword", forgotPassword);
router.use("/user", createUser);
router.use("/user", getUsersNames);
router.use("/user", getUserId);
router.use("/user/update", updateUser);
router.use("/user/admin", updateUserAdmin);
router.use("/user/login", loginUser)
// router.use("/profesional", createProfesional);
// router.use("/profesional", getProfesional);
// router.use("/profesional", getProfesionalId);
// router.use("/profesional/update", updateProfesional);
router.use("/loginGoogle", loginGoogles);
router.use("/favorites", createFavorite);
router.use("/favorites", getAllFavorites);
router.use("/favorites", getFavoriteUserId);
router.use("/reviews", reviews);
router.use("/reviews", getReviews);
router.use("/reviews", putReview);


module.exports = router;