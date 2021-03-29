const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String, require: true, lowercase: true, trim: true },
  prenom: { type: String, require: true, lowercase: true, trim: true },
  profession: { type: String, require: true, lowercase: true, trim: true },
  pays: { type: String, require: true, lowercase: true, trim: true },
  email: { type: String, require: true, lowercase: true, trim: true },
  password: { type: String, require: true, trim: true },
  image: { type: String, lowercase: true, trim: true },
  phoneNumber: { type: Number, require: true, trim: true },
});

module.exports = User = mongoose.model("users", userSchema);
