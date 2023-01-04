const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  first_name: { type: String },
  second_name: { type: String },
  learning_languages: { type: Array },
});

module.exports = model("User", UserSchema);
