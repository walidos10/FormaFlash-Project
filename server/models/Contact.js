const mongoose = require("mongoose");

const schema = mongoose.Schema;

const contactSchema = new schema({
  email: { type: String, require: true, lowercase: true, trim: true },
  phoneNumber: [{ type: Number, require: true, trim: true }],
  message: { type: String, lowercase: true },
});

module.exports = Contact = mongoose.model("contact", contactSchema);
