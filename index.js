require("dotenv").config(); // To get environment variables from a .env file
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const connection = require("./conf");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/members", (req, res) => {
  connection.query("SELECT * from member", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.json(results);
    }
  });
});

app.post("/members", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO member SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving an member");
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
