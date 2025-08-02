const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  hostname: String,
  timeSpent: Number,
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Activity', ActivitySchema);
