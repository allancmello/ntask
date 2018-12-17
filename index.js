const express = require('express');
const consign = require("consign");

const PORT = 3000;
const app = express();

app.set("json spaces", 4);

app.get('/', (req, res) => res.json({status: "NTask API"}));

consign()
    .include("db.js")
    .then("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);