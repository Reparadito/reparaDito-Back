const { Router } = require("express");
const express = require("express");
const { serachIsFav } = require("../controllers/getFavoritesByUserId");

const router = Router();
router.use(express.json());

router.get("/:usersId", async (req, res) => {
  
    let { usersId } = req.params;
  
    try {
      let resultado = await serachIsFav(usersId);
      res.status(200).json( resultado );
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  
  
  
  module.exports = router;