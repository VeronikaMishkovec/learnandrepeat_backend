/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require("mongoose");

const SetSchema = new Schema({
  lang: { type: String },
  title: { type: String },
  max_num: { type: Number },
  user_id: { type: String },
  creation_date: { type: Date },
  learning_stage: { type: Number },
  next_repeating_date: { type: String },
  next_repeat: { type: String },
});

module.exports = model("Set", SetSchema);
