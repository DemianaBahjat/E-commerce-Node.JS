const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 20
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[A-Za-z]{3,8}(@)(gmail|yahoo|outlook)(.com)$/.test(v);
      },
      message: props => `${props.value} is not a valid email !`
    }
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'User',
    enum: ["User", "Seller", "Admin"]
  }
}, { timestamps: true });

usersSchema.pre('save', async function(next) {
  // Hashing the password before saving
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const usersModel = mongoose.model("User", usersSchema);

module.exports = usersModel;

