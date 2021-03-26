const express = require("express");
const {
  login,
  addSchool,
  listSchool,
  SchoolById,
  SchoolUpdate,
  SchoolDelete,
  listSejour,
  SejourById,
  SejourUpdate,
  SejourDelete,
  addSejour,
  listNewsletter,
  listContact,
} = require("../controllers/AdminController");
const { registerRules, validator } = require("../middleware/Validator");

const isAuth = require("../middleware/Passport");

const router = express.Router();

router.post("/login", login);

router.get("/listSchool", isAuth(), listSchool);
router.get("/listSchool/:_id", SchoolById);
router.put("/listSchool/:_id", SchoolUpdate);
router.delete("/listSchool/:_id", SchoolDelete);
router.post("/addSchool", addSchool);

router.get("/listSejour", isAuth(), listSejour);
router.get("/listSejour/:_id", SejourById);
router.put("/listSejour/:_id", SejourUpdate);
router.delete("/listSejour/:_id", SejourDelete);
router.post("/addSejour", addSejour);

router.get("/listNewsletter", listNewsletter);
router.get("/listContact", listContact);

router.get("/current", isAuth(), (req, res) => {
  res.json(req.authAdmin);
});

module.exports = router;
