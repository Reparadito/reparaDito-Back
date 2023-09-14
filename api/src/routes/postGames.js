const { Router } = require("express");
const express = require("express");
const {createGame} = require("../controllers/createGame");
// const verifyToken = require("../controllers/verifyToken")

const router = Router();
router.use(express.json());

router.post("/", async (req, res) => {
 
  let {
     id,
     name,
     releaseDate,
     platforms,
     description,
     image,
     price,
     genre,
     screenShots,
     deleted,
     stock,
     tags,
     requeriments_en,
     requeriments_ru,
    } = req.body;
  try {
    let resultado = await createGame({
      id,
      name,
      releaseDate,    
      platforms,
      description,
      image,
      price,
      genre,
      screenShots,
      deleted,
      stock,
      tags,
     requeriments_en,
     requeriments_ru,
    });
    res.status(200).json({message: "Profesional creado con éxito. Comience a disfrutar de todos los Beneficios!"})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;