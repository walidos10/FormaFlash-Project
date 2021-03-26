const Admin = require("../models/Admin");
const School = require("../models/School");
const Sejour = require("../models/Sejours");
const jwt = require("jsonwebtoken");
const Newsletter = require("../models/Newsletter");
const Contact = require("../models/Contact");

//const multer = require("multer");
require("dotenv").config({ path: "./config/.env" });
const secretOrKey = process.env.secretOrKey;
const joi = require("joi");
const router = require("../routes/Admin");
/*const storage=multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"./client/public/uploads/")
  },
  filename:(req,file,callback)=>{
    callback(null,file,originalname)
  }
})
const upload=multer({storage:storage});*/
/// login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) return res.status(400).json({ msg: "Wrong email" });

  const isMatch = await Admin.findOne({ password });
  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  try {
    const payload = {
      email: admin.email,
      id: admin._id,
    };

    const token = await jwt.sign(payload, secretOrKey);

    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log("Login error", error);
    res.status(500).json({ msg: "Login fail" });
  }
};

/// addSchool
//;upload.single("articleimage")
exports.addSchool = async (req, res) => {
  /* //var token = getToken(req.headers);
  // console.log(token);
  const schema = {
    name: Joi.string().min(3).max(15).required(),
    pays: Joi.string().min(3).max(20).required(),
    ville: Joi.string().min(3).max(20).required(),
    langue: Joi.string().min(3).max(20).required(),
    programme: Joi.string().min(3).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),

    image,
    phoneNumber: Joi.number().integer(),
  };
  const joiError = joi.validate(req.body, schema);

  if (JoiError.error) {
    return res.send(joiError.error.details[0].message);
  }

  console.log(req.body);
  sch;
*/
  //console.log(req.files.f);
  //console.log(req.files);
  const {
    name,
    pays,
    ville,
    langue,
    programme,
    email,
    image,
    phone,
    prix,
  } = req.body;
  //{file}=req.body
  //const file = req.files.file;
  //const file = req.body.files.file;
  //const image=req.file.articleimage;
  const searchResult = await School.findOne({ email });

  if (searchResult)
    return res.status(401).json({ msg: "School already existe" });

  try {
    const newSchool = new School({
      name,
      pays,
      ville,
      langue,
      programme,
      email,
      image,
      phone,
      prix,
    });

    await newSchool.save();
    res.status(201).json({ msg: "School added successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "School add fail" });
  }
};
/// listSchool

exports.listSchool = async (req, res) => {
  try {
    const school = await School.find();
    res.status(201).json({ msg: "School successfully", school });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "School  fail" });
  }
};
///SchoolbyId
exports.SchoolById = async (req, res) => {
  let { _id } = req.params;
  try {
    let school = await School.find({ _id });
    console.log(school);

    res.status(201).json({ msg: "School successfully", school });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "School  fail" });
  }
};

/// SchoolUpdate
exports.SchoolUpdate = async (req, res) => {
  let { _id } = req.params;
  try {
    let school = await School.findByIdAndUpdate(
      { _id },
      { $set: { ...req.body } }
    );
    res.status(201).json({ msg: "School update", school });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "School  fail" });
  }
};

//// schoolDelete
exports.SchoolDelete = async (req, res) => {
  let { _id } = req.params;
  try {
    let school = await School.findByIdAndDelete({ _id });

    res.status(201).json({ msg: "School delete" });
  } catch (error) {
    res.status(501).json({ msg: "fail" });
  }
};

exports.addSejour = async (req, res) => {
  const {
    name,
    pays,
    ville,
    langue,
    programme,
    description1,
    description2,
    image,
  } = req.body;

  try {
    const newSejour = new Sejour({
      name,
      pays,
      ville,
      langue,
      programme,
      description1,
      description2,
      image,
    });
    await newSejour.save();
    res.status(201).json({ msg: "Sejour added successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "Sejour add fail" });
  }
};

exports.listSejour = async (req, res) => {
  try {
    const sejour = await Sejour.find();
    res.status(201).json({ msg: "Sejour successfully", sejour });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "Sejour  fail" });
  }
};
exports.SejourById = async (req, res) => {
  let { _id } = req.params;
  try {
    let sejour = await Sejour.find({ _id });

    res.status(201).json({ msg: "Sejour successfully", sejour });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "Sejour  fail" });
  }
};
exports.SejourUpdate = async (req, res) => {
  let { _id } = req.params;
  try {
    let sejour = await Sejour.findByIdAndUpdate(
      { _id },
      { $set: { ...req.body } }
    );
    res.status(201).json({ msg: "Sejour update", sejour });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "Sejour  fail" });
  }
};

exports.SejourDelete = async (req, res) => {
  let { _id } = req.params;
  try {
    let sejour = await Sejour.findByIdAndDelete({ _id });

    res.status(201).json({ msg: "Sejour delete" });
  } catch (error) {
    res.status(501).json({ msg: " Sejour fail" });
  }
};

exports.listNewsletter = async (req, res) => {
  try {
    const letter = await Newsletter.find();
    res.status(201).json({ msg: "newSletter successfully", letter });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "newSletter  fail" });
  }
};
exports.listContact = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(201).json({ msg: "Contact successfully", school });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "Contact  fail" });
  }
};
