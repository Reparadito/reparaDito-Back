const { Router } = require("express");
const express = require("express");
const { createUser } = require("../controllers/createUser");

const router = Router();
router.use(express.json());

router.post("/", async (req, res) => {
 
  let { id, user, password, fullname, userAdmin, email, date, image, phone, tac, newsLetter, deleted } = req.body;   

  try {

      let newUser = await createUser({
      id,
      user,
      password,
      fullname,
      userAdmin,
      email,
      date,
      image,
      phone,
      tac,
      newsLetter,
      deleted           
      });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
