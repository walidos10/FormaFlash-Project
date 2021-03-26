const mongoose = require("mongoose");

const schema = mongoose.Schema;

const schoolSchema = new schema({
  name: { type: String, require: true, lowercase: true },
  pays: [{ type: String, require: true, lowercase: true }],
  ville: [{ type: String, require: true, lowercase: true }],
  langue: [{ type: String, require: true, lowercase: true, trim: true }],
  programme: [{ type: String, require: true }],
  email: { type: String, require: true, lowercase: true, trim: true },
  image: [{ type: String }],
  phoneNumber: [{ type: Number, require: true, trim: true }],
  prix: [{ type: Number, require: true, trim: true }],
});

module.exports = School = mongoose.model("school", schoolSchema);
