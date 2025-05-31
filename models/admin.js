
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: String,
  username: String,
  admin_type: String,
  country: String,
  emergency_response: String,
  service_info: String,
  latitude: String,
  longitude: String,
  password: String
});

module.exports = mongoose.model('Admin', adminSchema);
