const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  _id: { type: String }
});

module.exports = model("User", UserSchema);
