const express = require("express")();
const mongoose = require("mongoose");
require("dotenv/config");
const posts = require("./router/post");
const bodyParser = require("body-parser");
const cors = require("cors");

express.use(bodyParser.json());
express.use(cors());
express.use("/posts", posts);




mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to db !");
})
express.listen(9600, () => {
    console.log("testing");
})