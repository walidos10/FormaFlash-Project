const mongoose = require("mongoose");

const schema = mongoose.Schema;

const adminSchema = new schema({
  email: { type: String, require: true, lowercase: true, trim: true },
  password: { type: String, require: true, lowercase: true, trim: true },
});

module.exports = Admin = mongoose.model("admin", adminSchema);

admin = new Admin();

/*const admin = new Admin({
 email:walid-attia@live.fr,
 password:walid1990


})
admin.save()
*/
