const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const foodRoute = require("./routes/foodRoute");
const userRoute = require("./routes/user.route");

// Config
const app = express();
const port = process.env.PORT || 4000;

// Endpoints
app.use(foodRoute);
app.use(userRoute);
app.use("/images", express.static("uploads"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const startApp = async () => {
  try {
    await app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
    await mongoose.connect(process.env.MONGO_DB).then(() => console.log("Db connected"));
  } catch (error) {
    console.log("Server ishga Tushmadi..")
  }
};

startApp();
