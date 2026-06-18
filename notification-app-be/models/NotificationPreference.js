const mongoose = require("mongoose");

const preferenceSchema = new mongoose.Schema({
  userId: String,
  emailEnabled: Boolean,
  pushEnabled: Boolean,
  inAppEnabled: Boolean,
  mutedTypes: [String]
});

module.exports = mongoose.model("NotificationPreference", preferenceSchema);