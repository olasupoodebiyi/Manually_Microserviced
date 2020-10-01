const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const PORT = 4005;
const app = express();
app.use(bodyParser.json());

const events = [];

app.get("/", (req, res) => {
  res.send("Welcome the the Events Bus Service!");
});

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);
  axios.post("http://localhost:4003/events", event);

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(PORT, () => {
  console.log("Event Bus is running on PORT " + PORT);
});
