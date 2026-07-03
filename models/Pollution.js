const mongoose = require('mongoose');

const pollutionSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
  },
  aqi: {
    type: Number,
    required: true,
  },
  pm25: {
    type: Number,
  },
  pm10: {
    type: Number,
  },
  co2Level: {
    type: Number,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Pollution', pollutionSchema);
