const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  first_name: { type: String },
  second_name: { type: String },
  learning_languages: { type: Array },
  words_total_number: { type: Number },
  learn_words_number: { type: Number }
});

module.exports = model("User", UserSchema);
