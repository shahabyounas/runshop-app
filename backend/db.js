const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const { readCSVFiles } = require("./seed/loadData");

const mongoURL = "mongodb://127.0.0.1:27017/runshop";

async function dbConnect() {
  try {
    await mongoose.connect(mongoURL);

    await readCSVFiles();
    console.log("server connected");
  } catch (error) {
    console.error(error);
  }
  // This will create an new instance of "MongoMemoryServer" and automatically start it
}

dbConnect();
