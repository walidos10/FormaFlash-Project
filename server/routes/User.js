const express = require("express");
const {
  register,
  login,
  devis,
  contact,
  newSletter,

  listSchool,
  SchoolById,
} = require("../controllers/userController");

//const { registerRules, validator } = require("../middleware/Validator");

const isAuth = require("../middleware/Passport");

const router = express.Router();
/*registerRules(), validator*/

router.get("/listSchool", listSchool);
router.get("/listSchool/:_id", SchoolById);
router.post("/login", login);
router.post("/register", register);
router.post("/devis", devis);
router.post("/contact", contact);
router.post("/newSletter", newSletter);

router.get("/current", isAuth(), (req, res) => {
  res.json(req.authAdmin);
});

module.exports = router;
