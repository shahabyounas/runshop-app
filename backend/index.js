const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const port = 3000;
const dev = app.get("env") == "development";
const db = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api/v1", require("./api/v1"));

app.get("/", function (req, res) {
  res.send("This is root route");
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found here",
  });
});

app.use(error);

app.listen(port, () => {
  console.log("Server running");
});

function error(err, req, res, next) {
  if (!dev) {
    console.error(err.stack);
  }

  res.status(500).json({ message: "Internal Server error" });
}
