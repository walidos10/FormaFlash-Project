const mongoose = require("mongoose");

const schema = mongoose.Schema;

const sejourSchema = new schema({
  name: { type: String, require: true, lowercase: true },
  pays: [{ type: String, require: true, lowercase: true }],
  ville: [{ type: String, require: true, lowercase: true }],
  langue: [{ type: String, require: true, lowercase: true, trim: true }],
  programme: [{ type: String, require: true }],
  description1: { type: String, require: true },
  description2: { type: String, require: true },

  image: [{ type: String }],
});

module.exports = Sejour = mongoose.model("sejour", sejourSchema);
