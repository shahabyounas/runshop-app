const fs = require("node:fs/promises");
const fsCb = require("fs");
const csv = require("csv-parser");
const path = require("node:path");
const {
  Bet,
  IndividualFixture,
  Market,
  ModelSelection,
  ParticipantFixture,
  Trader,
} = require("../models");

async function createModelsFiles(fileExt = "model", fileType = "js") {
  const dir = await fs.opendir("../runshop_bet_resolution_test");
  const filesNames = [];

  for await (const file of dir) {
    filesNames.push(file.name);
  }

  const filesWithCSVExt = filesNames.filter((fn) => fn.includes(".csv"));

  filesWithCSVExt.forEach((file) => {
    const data = new Uint8Array(Buffer.from(file));
    const fileName = `${file.split(".")[0]}.${fileExt}.${fileType}`;

    fs.writeFile(path.join(__dirname, "../models", fileName), data);
  });
}

async function readCSVFiles() {
  const docsCount = await Bet.countDocuments();
  if (docsCount > 0) {
    console.log("Bet.countDocuments", docsCount);
    return;
  }

  const dir = await fs.opendir(
    path.join(__dirname, "../runshop_bet_resolution_test")
  );

  const filesData = {};

  for await (const file of dir) {
    const filePath = path.join(file.path, file.name);
    fsCb
      .createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        if (filesData[file.name]) {
          filesData[file.name].push(data);
        } else {
          filesData[file.name] = [];
          filesData[file.name].push(data);
        }
      })
      .on("end", () => {
        const keys = Object.keys(filesData);
        const findKey = keys.find((key) => key === file.name);

        if (findKey == file.name) {
          seeder(findKey, filesData[findKey]);
        }
      });
  }
}

/**
 * 
 Seed the Database
 */

// #Seed Section starts

async function seeder(targetSeed, data = []) {
  switch (targetSeed) {
    case "bets_placed.csv":
      await seedBets(data);
    case "individual_fixtures.csv":
      await seedIndividualFixtures(data);
    case "markets.csv":
      await seedMarkets(data);
    case "model_selections.csv":
      await seedModelSelections(data);
    case "participant_fixtures.csv":
      await seedParticipantFixtures(data);
    case "traders.csv":
      await seedTraders(data);
    default:
      console.log("Seed done");
  }
}

async function seedBets(data) {
  const bets = data.map((d) => new Bet(d));
  await Bet.bulkSave(bets);
}

async function seedIndividualFixtures(data) {
  const individualFixtures = data.map((d) => new IndividualFixture(d));
  await IndividualFixture.bulkSave(individualFixtures);
}

async function seedParticipantFixtures(data) {
  const participantFixtures = data.map((d) => new ParticipantFixture(d));
  await ParticipantFixture.bulkSave(participantFixtures);
}

async function seedMarkets(data) {
  const markets = data.map((d) => new Market(d));
  await Market.bulkSave(markets);
}

async function seedModelSelections(data) {
  const modelSelections = data.map((d) => new ModelSelection(d));
  await ModelSelection.bulkSave(modelSelections);
}

async function seedTraders(data) {
  const traders = data.map((d) => new Trader(d));
  await Trader.bulkSave(traders);
}

// #Seed Section ends

module.exports = {
  readCSVFiles,
};
