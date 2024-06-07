const express = require("express");
const { Bet } = require("../../models");
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

module.exports = appRouter;
