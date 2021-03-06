const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  wins: {
    type: Number,
    default: 0,
  },
  gameID: String,
  state: String,
  response: String,
  promptMaster: {
    type: Boolean,
    default: false
  },
  currentScore: {
    type: Number,
    default: 0
  },
  avatar: String,
  socketID: String
  
});

UserSchema.pre("save", function(callback) {
    let user = this;

    if (!user.isModified("password")) return callback();
  
    console.log("before hash: ", user)
    bcrypt.genSalt(5, function(err, salt) {
      if (err) return callback(err);
      
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return callback(err);
        user.password = hash;
        console.log("after hash: ", user)
        callback();
      });
    });
  });
  
  UserSchema.methods.verifyPassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };
  
  const User = mongoose.model("User", UserSchema, "User");
  
  module.exports = User;