const mongoose = require("mongoose");

const { Schema } = mongoose;

const TraderSchema = new Schema({
  trader_id: String, // ObjectId
  trader_name: String,
});

const Trader = mongoose.model("Trader", TraderSchema);

module.exports = {
  Trader,
  TraderSchema,
};
