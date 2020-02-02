const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  isDeleted:{type:Boolean, default: false},
  date: { type: Date, default: Date.now }
});
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}
const User = mongoose.model("User", UserSchema);

module.exports = User;
