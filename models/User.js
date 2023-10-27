const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    firstName: { type: String, trim: true, default: 'noname' },
    location: { type: String, trim: true, default: 'nolocation' },
    tools: {
      React: { type: Boolean, default: false },
      Angular: { type: Boolean, default: false },
      Vuejs: { type: Boolean, default: false },
    },
    otherTools: { type: String, trim: true, default: '' },
    updatesOptIn: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
