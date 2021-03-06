const mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
const UserSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  hash_password: {
    type: String,
  },
  confirmationCode: {
    type: String,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password);
};

export default mongoose.model("User", UserSchema);
