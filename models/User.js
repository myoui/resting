const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        default: "N/A"
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
  });

  
module.exports = mongoose.model("User", UserSchema);