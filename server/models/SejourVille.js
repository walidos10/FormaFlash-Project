const mongoose = require("mongoose");

const schema = mongoose.Schema;

const villeSchema = new schema({
  Nom_Sejour: { type: String, require: true },
  Titre_Sejour: { type: String, require: true },
  Langue_Sejour: [{ type: String, require: true }],
  Pays_Sejour: { type: String, require: true },
  Ville_Sejour: { type: String, require: true },
  Image_Sejour: { type: String, require: true },
  PROGRAMME_Sejour: [{ type: String, require: true }],
  Description_Resume_Sejour: { type: String, require: true },
  Description_Entiere_Sejour: { type: String, require: true },
});

module.exports = Ville = mongoose.model("ville", villeSchema);
