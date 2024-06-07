const mongoose = require("mongoose");
const { getTimeStamp } = require("../util/time");

const { Schema } = mongoose;

const BetSchema = new Schema({
  selection_id: String, // ObjectId
  fixture_id: String, // String ID
  market_id: String,
  selection: String,
  value: String,
  bet_time: { type: String, default: Date.now },
  stake_size: String,
  price: String,
  trader_id: String, // ObjectId
});

const Bet = mongoose.model("Bet", BetSchema);

BetSchema.pre("save", function (next) {
  if (this.bet_time) {
    this.bet_time = getTimeStamp(this.bet_time);
  }
  next();
});

module.exports = {
  Bet,
  BetSchema,
};
