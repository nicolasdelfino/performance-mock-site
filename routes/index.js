const jsonData = require("./data.json");
const jsonDataOpt = require("./data-opt.json");
const express = require("express");
const path = require("path");
const router = express.Router(); // eslint-disable
const axios = require("axios");

router.get("/", (req, res) => {
  res.render("slow");
});

router.get("/medium", (req, res) => {
  res.render("medium");
});

router.get("/fast", async (req, res) => {
  try {
    const d = await axios.get("http://localhost:4000/items/v2");
    res.render("fast", { data: d.data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/items/v1", (req, res) => {
  res.json(jsonData);
});

router.get("/items/v2", (req, res) => {
  res.json(jsonDataOpt);
});

router.get("/3rdparty/facebook", (req, res) => {
  res.sendFile("facebook.js", {
    root: path.join(__dirname, "../public/js/3rd-parties")
  });
});

router.get("/3rdparty/fbevents", (req, res) => {
  res.sendFile("fbevents.js", {
    root: path.join(__dirname, "../public/js/3rd-parties")
  });
});

module.exports = router;
