const ImageSchema = mongoose.Schema({
  type: String,
  data: Buffer,
});

module.exports = mongoose.model("File", ImageSchema);
