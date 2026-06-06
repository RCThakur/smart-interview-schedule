const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  interviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  start: Date,

  end: Date,

  status: {
    type: String,
    enum: ["available", "booked", "cancelled", "completed"],
    default: "available",
  },
});

module.exports = mongoose.model("Slot", slotSchema);
