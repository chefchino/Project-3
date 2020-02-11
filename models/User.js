const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
//const hashedPassword = bcrypt.hashSync(passWord, 10);
//const validPassword = bcrypt.compareSync(req.body.passWord, hashedPassword)

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: {type: String, required: true, unique: true},
  passWord: { type: String, required: true, minlength: 8 },
  email: { type: String, required: true, unique: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  isDeleted:{type:Boolean, default: false},
  date: { type: Date, default: Date.now }
});

UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('passWord')) return next();

  // generate a salt
  bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      // hash the passWord using our new salt
      bcrypt.hash(user.passWord, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext passWord with the hashed one
          user.passWord = hash;
          next();
      });
  });
});
    UserSchema.methods.validPassword=function(passWord) {

      return bcrypt.compare(passWord, this.passWord);
    }
    // var animalSchema = new Schema({ name: String, type: String });

    // animalSchema.methods.findSimilarTypes = function(cb) {
    //   return this.model('Animal').find({ type: this.type }, cb);
    // };
const User = mongoose.model("User", UserSchema);

module.exports = User;
