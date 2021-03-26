const User = require("../models/User");
const School = require("../models/School");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Devis = require("../models/Devis");
const Contact = require("../models/Contact");
const Newsletter = require("../models/Newsletter");
require("dotenv").config({ path: "./config/.env" });
const secretOrKey = process.env.secretOrKey;

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

exports.register = async (req, res) => {
  const {
    name,
    prenom,
    profession,
    pays,
    email,
    password,
    phoneNumber,
  } = req.body;

  const searchResult = await User.findOne({ email });

  if (searchResult) return res.status(401).json({ msg: "User already existe" });

  try {
    const newUser = new User({
      name,
      prenom,
      profession,
      pays,
      email,
      password,
      phoneNumber,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    newUser.password = hash;

    await newUser.save();
    res.status(201).json({ msg: "User added successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "User add fail" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ msg: "Wrong email" });

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(user);
  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  try {
    const payload = {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      id: user._id,
    };

    const token = await jwt.sign(payload, secretOrKey);

    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log("Login error", error);
    res.status(500).json({ msg: "Login fail" });
  }
};
exports.devis = async (req, res) => {
  const {
    name,
    prenom,
    age,
    pays,
    ville,
    programme,
    email,
    phoneNumber,
  } = req.body;

  //const searchResult = await User.findOne({ email });

  //if (searchResult) return res.status(401).json({ msg: "User already existe" });

  try {
    const newDevis = new Devis({
      name,
      prenom,
      age,
      pays,
      ville,
      programme,
      email,
      phoneNumber,
    });

    await newDevis.save();
    res.status(201).json({ msg: " successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: " fail" });
  }
};
exports.contact = async (req, res) => {
  const {
    email,

    phoneNumber,
    message,
  } = req.body;

  const searchResult = await User.findOne({ email });

  if (searchResult) return res.status(401).json({ msg: "User already existe" });

  try {
    const newContact = new Contact({
      email,

      phoneNumber,
      message,
    });

    await newContact.save();
    res.status(201).json({ msg: " successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "fail" });
  }
};

exports.newSletter = async (req, res) => {
  const { email } = req.body;

  try {
    const newNewsletter = new Newsletter({
      email,
    });

    await newNewsletter.save();
    res.status(201).json({ msg: " successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "fail" });
  }
};
