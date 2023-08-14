const { Router } = require("express");
const { searchDB, allUserAdmin } = require("../controllers/getUserName");
const express = require("express");


const router = Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const { user } = req.query;

  try {
    let resultado = await searchDB(user);
    res.status(200).json( resultado );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/admin", async (req, res) => {

  try {
    let resultado = await allUserAdmin();
    res.status(200).json( resultado );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});


module.exports = router;



