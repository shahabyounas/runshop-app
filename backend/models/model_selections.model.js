const mongoose = require("mongoose");

const { Schema } = mongoose;

const ModelSelectionSchema = new Schema({
  selection_id: String, // ObjectId
  fixture_id: String,
  market_id: String,
  selection: String,
  value: String,
  bottom_price: String,
});

const ModelSelection = mongoose.model("ModelSelection", ModelSelectionSchema);

module.exports = {
  ModelSelection,
  ModelSelectionSchema,
};
