const mongoose = require("mongoose");

const schema = mongoose.Schema;

const devisSchema = new schema({
  name: { type: String, require: true, lowercase: true },
  prenom: { type: String, require: true, lowercase: true },
  age: { type: Number, require: true },
  pays: [{ type: String, require: true, lowercase: true }],
  ville: [{ type: String, require: true, lowercase: true }],
  langue: [{ type: String, require: true, lowercase: true, trim: true }],
  programme: [{ type: String, require: true }],
  email: { type: String, require: true, lowercase: true, trim: true },
  phoneNumber: [{ type: Number, require: true, trim: true }],
});

module.exports = Devis = mongoose.model("devis", devisSchema);
