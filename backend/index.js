require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");


const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

const app = express();


// ✅ Allow all origins for now (fixes CORS issue)
app.use(cors());

app.use(express.json());





app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Error fetching holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Error fetching positions" });
  }
});



// ✅ Connect to DB first, then start server
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
