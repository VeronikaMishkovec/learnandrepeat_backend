/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require("mongoose");

const PartOfSpeechSchema = new Schema({
  name: { type: String },
  color: { type: String }
});

module.exports = model("PartOfSpeech", PartOfSpeechSchema);
