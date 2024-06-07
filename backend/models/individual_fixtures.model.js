const mongoose = require("mongoose");
const { getTimeStamp } = require("../util/time");

const { Schema } = mongoose;

const IndividualFixtureSchema = new Schema({
  fixture_id: String,
  event_name: String,
  event_number: String,
  event_start_time: { type: String, default: Date.now },
  runner: String,
  sport_id: String,
});

IndividualFixtureSchema.pre("save", function (next) {
  if (this.event_start_time) {
    this.event_start_time = getTimeStamp(this.event_start_time);
  }
  next();
});

const IndividualFixture = mongoose.model(
  "IndividualFixture",
  IndividualFixtureSchema
);

module.exports = {
  IndividualFixture,
  IndividualFixtureSchema,
};
