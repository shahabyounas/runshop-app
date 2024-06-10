const mongoose = require("mongoose");
const { getTimeStamp } = require("../util/datetime");

const { Schema } = mongoose;

const ParticipantFixtureSchema = new Schema({
  fixture_id: String,
  participant_1: String,
  participant_2: String,
  sport_id: String,
  event_start_time: { type: String, default: Date.now },
});

ParticipantFixtureSchema.pre("save", function (next) {
  if (this.event_start_time) {
    this.event_start_time = getTimeStamp(this.event_start_time);
  }
  next();
});

const ParticipantFixture = mongoose.model(
  "ParticipantFixture",
  ParticipantFixtureSchema
);

module.exports = {
  ParticipantFixture,
  ParticipantFixtureSchema,
};
