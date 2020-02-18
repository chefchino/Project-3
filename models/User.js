const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  passWord: { type: String, required: true, minlength: 8 },
  email: { type: String, required: true, unique: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  cart: { type: Array },
  isDeleted: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

UserSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('passWord')) return next();
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.passWord, salt, function (err, hash) {
      if (err) return next(err);
      user.passWord = hash;
      next();
    });
  });
});
UserSchema.methods.validPassword = function (passWord) {
  return bcrypt.compareSync(passWord, this.passWord);
}
const User = mongoose.model("User", UserSchema);

module.exports = User;
