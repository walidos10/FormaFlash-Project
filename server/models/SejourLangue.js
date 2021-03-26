const mongoose = require("mongoose");

const schema = mongoose.Schema;

const langueSchema = new schema({
  Nom_Sejour: { type: String, require: true },
  Titre_Sejour: { type: String, require: true },
  Langue_Sejour: { type: String, require: true },
  Pays_Sejour: [{ type: String, require: true }],
  Image_Sejour: { type: String, require: true },
  PROGRAMME_Sejour: [{ type: String, require: true }],
  Description_Resume_Sejour: { type: String, require: true },
  Description_Entiere_Sejour: { type: String, require: true },
});

module.exports = Langue = mongoose.model("langue", langueSchema);
