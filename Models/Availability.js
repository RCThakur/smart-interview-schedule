const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  interviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  daysOfWeek: [Number],

  startTime: String,

  endTime: String,

  duration: Number,
});

module.exports = mongoose.model("Availability", availabilitySchema);
