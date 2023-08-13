const { Router } = require("express");
const express = require("express");
const {createProfesional} = require("../controllers/createProfesional");
// const verifyToken = require("../controllers/verifyToken")

const router = Router();
router.use(express.json());

router.post("/", async (req, res) => {
 
  let { id, name, fullname, password, email, date, image, phone, tac, newsLetter, userAdmin, profesion, deleted } = req.body;
  try {
    let resultado = await createProfesional({
      id,
      name,
      fullname,    
      password,
      email,
      date,
      image,
      phone,
      tac,
      newsLetter,
      userAdmin,
      profesion,
      deleted
    });
    res.status(200).json(resultado)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;