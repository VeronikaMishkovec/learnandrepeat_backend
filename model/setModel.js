/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require("mongoose");

const SetSchema = new Schema({
  lang: {
    title: { type: String }},
  title: { type: String },
  max_num: { type: Number },
  user_id: { type: String },
  creation_date: { type: Date },
  learning_stage: { type: Number },
  next_repeating_date: { type: String },
  next_repeat: { type: String },
  current_num: { type: Number },
  set_status: { type: String }
});

module.exports = model("Set", SetSchema);
