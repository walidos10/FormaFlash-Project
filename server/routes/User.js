const express = require("express");
const {
  register,
  login,
  devis,
  contact,
  newSletter,
  listSejour,
  listSchool,
  SchoolById,
  SejourById,
} = require("../controllers/UserController");

const { registerRules, validator } = require("../middleware/Validator");

const isAuthuser = require("../middleware/PassportUser");

const router = express.Router();
/*registerRules(), validator*/

router.get("/listSejour", listSejour);
router.get("/listSejour/:_id", SejourById);
router.get("/listSchool", listSchool);
router.get("/listSchool/:_id", SchoolById);
router.post("/login", login);
router.post("/register", registerRules(), validator, register);
router.post("/devis", devis);
router.post("/contact", contact);
router.post("/newSletter", newSletter);

router.get("/current", isAuthuser(), (req, res) => {
  res.json(req.authAdmin);
});

module.exports = router;
