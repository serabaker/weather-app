const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const PORT = 3001;
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

app.get("/api/:version", function (req, res) {
  res.send(req.params.version);
});

app.get("/current/:location/", async function (req, res) {
  try {
    const THE_KEY = "af6881f2d1cfd556f1a25929b15e756b";

    const weather = await axios.get(
      `http://api.weatherstack.com/current?access_key=${THE_KEY}&query=${req.params.location}`
    );

    console.log(weather.data.current);

    res.render("weatherstack", { info: weather.data });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error Message", error.message);
    }
  }
});

// app.get("/App.js", (req, res) => res.send("Britny"));

app.get("/message", (req, res) =>
  res.json({
    message: "Hi from server",
  })
);

app.listen(PORT, () => console.log(`Port is up and running on ${PORT}`));
