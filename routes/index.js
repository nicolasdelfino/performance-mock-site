const data = require("./data.json");
const express = require("express");
const path = require("path");
const router = express.Router() // eslint-disab

router.get("/", (req, res) => {
  res.render("slow");
});

router.get("/medium", (req, res) => {
  res.render("medium");
});

router.get("/fast", (req, res) => {
  res.render("fast");
});

router.get("/items/v1", (req, res) => {
  res.json(data);
});

router.get("/facebook", (req, res) => {
  res.sendFile('facebook.js', { root: path.join(__dirname, '../public/js/3rd-parties') });
});

router.get("/fbevents", (req, res) => {
  res.sendFile('fbevents.js', { root: path.join(__dirname, '../public/js/3rd-parties') });
});

module.exports = router;
