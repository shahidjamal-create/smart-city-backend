const mongoose = require('mongoose');

const trafficSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  vehicleCount: {
    type: Number,
    required: true,
  },
  congestionLevel: {
    type: String,
    enum: ['Low', 'Moderate', 'High', 'Severe'],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Traffic', trafficSchema);
