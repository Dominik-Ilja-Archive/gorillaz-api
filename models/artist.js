const mongoose = require('mongoose');

module.exports = mongoose.model('Artist', new mongoose.Schema(
  { name: { type: String, required: true, unique: true }, },
  { timestamps: true }
));
