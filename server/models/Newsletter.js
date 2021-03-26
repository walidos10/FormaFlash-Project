const mongoose = require("mongoose");

const schema = mongoose.Schema;

const newsletterSchema = new schema({
  email: { type: String, require: true, lowercase: true, trim: true },
});

module.exports = Newsletter = mongoose.model("newsletter", newsletterSchema);
