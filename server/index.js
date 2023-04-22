require("dotenv").config();
const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const searchRouter = require("./routes/search.route");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send({ mesg: "Welcome to SearchAds Server !" });
});

app.use("/search", searchRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to database successfully !");
  } catch (err) {
    console.log("Database connection failed ! Error is :", err);
  }
  console.log("Server in running on port :", PORT);
});
