
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  first_name: String,
  last_name: String,
  driving_license: String,
  national_id: String,
  number_plate: String,
  address: String,
  gps_tracker_no: String,
  password: String,
  country: String,
  emergency_contact_number: String,
  emergency_contact_number_of_a_related_person: String
});

module.exports = mongoose.model('User', userSchema);
