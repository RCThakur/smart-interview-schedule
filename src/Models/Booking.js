const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  slot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Slot",
  },

  interviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  candidateName: String,

  candidateEmail: String,

  note: String,

  calendarEventId: String,

  cancelToken: String,

  status: {
    type: String,
    default: "booked",
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
