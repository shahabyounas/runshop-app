const mongoose = require("mongoose");

const { Schema } = mongoose;

const MarketSchema = new Schema({
  market_name: String,
  market_id: Number,
});

const Market = mongoose.model("Market", MarketSchema);

module.exports = {
  Market,
  MarketSchema,
};
