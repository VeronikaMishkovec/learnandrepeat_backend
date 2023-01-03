const { Schema, model } = require("mongoose");

const WordSchema = new Schema({
  origin: { type: String, unique: true, required: true },
  translation: { type: String, required: true },
  set_id: { type: String },
  part_of_speech: { type: String },
  part_of_speech_color: { type: String },
});

module.exports = model("Word", WordSchema);
