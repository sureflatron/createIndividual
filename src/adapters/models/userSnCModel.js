const mongoose = require("mongoose");

const userSnCSchema = new mongoose.Schema({
  createdAt: { type: Date },
  familyName: String,
  givenName: String,
  nationality: String,
  dateOfBirth: Date,
  identificationsIdentificationId: String,
  identificationsIdentificationType: String,
  identificationsStartDatetime: Date,
  contactMediaStartDatetime: Date,
  _class: String,
});

module.exports = mongoose.model("UserSnC", userSnCSchema, "userSnCnode");
