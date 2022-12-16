/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require("mongoose");

const LangSchema = new Schema({
  title: { type: String },
  image: { type: String }
});

module.exports = model("Lang", LangSchema);
