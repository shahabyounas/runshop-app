const { Bet } = require("./bets_placed.model");
const { IndividualFixture } = require("./individual_fixtures.model");
const { Market } = require("./markets.model");
const { ModelSelection } = require("./model_selections.model");
const { ParticipantFixture } = require("./participant_fixtures.model");
const { Trader } = require("./traders.model");

module.exports = {
  Bet,
  IndividualFixture,
  Market,
  ModelSelection,
  ParticipantFixture,
  Trader,
};
