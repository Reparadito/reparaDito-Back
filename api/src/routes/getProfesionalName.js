const { Router } = require("express");
const { searchDB } = require("../controllers/getProfesionalName");
const express = require("express");


const router = Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    let resultado = await searchDB(name);
    res.status(200).json( resultado );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// router.get("/admin", async (req, res) => {

//   try {
//     let resultado = await allProfesionalesAdmin();
//     res.status(200).json( resultado );
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// }
// );


module.exports = router;