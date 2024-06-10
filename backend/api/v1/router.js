const express = require("express");
const {
  Bet,
  IndividualFixture,
  Market,
  ModelSelection,
  ParticipantFixture,
  Trader,
} = require("../../models");
const appRouter = express.Router();

appRouter.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "This is API V1 root",
  });
});

appRouter.get("/bets", async (req, res, next) => {
  try {
    const bets = await Bet.find({});

    return res
      .status(200)
      .json({ message: "Data list retrieved ", data: bets });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server can not process the request, Please try again later",
    });
  }
});

appRouter.get("/individualfixtures", async (req, res, next) => {
  try {
    const individualFixtures = await IndividualFixture.find({});

    return res
      .status(200)
      .json({ message: "Data list retrieved ", data: individualFixtures });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server can not process the request, Please try again later",
    });
  }
});

appRouter.get("/participantfixtures", async (req, res, next) => {
  try {
    const participantfixtures = await ParticipantFixture.find({});

    return res
      .status(200)
      .json({ message: "Data list retrieved ", data: participantfixtures });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server can not process the request, Please try again later",
    });
  }
});

appRouter.get("/markets", async (req, res, next) => {
  try {
    const markets = await Market.find({});

    return res
      .status(200)
      .json({ message: "Data list retrieved ", data: markets });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server can not process the request, Please try again later",
    });
  }
});

appRouter.get("/models", async (req, res, next) => {
  try {
    const modelSelection = await ModelSelection.find({});

    return res
      .status(200)
      .json({ message: "Data list retrieved ", data: modelSelection });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server can not process the request, Please try again later",
    });
  }
});

appRouter.get("/traders", async (req, res, next) => {
  try {
    const traders = await Trader.find({});

    return res
      .status(200)
      .json({ message: "Data list retrieved ", data: traders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server can not process the request, Please try again later",
    });
  }
});

module.exports = appRouter;
