const { Schema, model } = require("mongoose");

const WordSchema = new Schema({
  origin: { type: String, unique: true, required: true },
  translation: { type: String, required: true },
  set_id: { type: String },
});

module.exports = model("Word", WordSchema);
