const { Router } = require("express");
const express = require("express");
const { createFavorite } = require("../controllers/createFavorites");

const router = Router();
router.use(express.json());

router.post("/", async (req, res) => {
    const {videogameId, usersId, isFav} = req.body;
  
      try {
          const response = await createFavorite({videogameId, usersId, isFav});
        //   console.log("Respuesta del Route Favorites --->",response);
          res.status(200).json(response)  
      } catch (error) {
          res.status(404).json({mesagge: error.message});
      }
  });

module.exports = router;