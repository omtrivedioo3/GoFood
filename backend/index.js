const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const db = require("./db");
// const DisplayData = require()
const DisplayData = require("./routes/DisplayData");
// require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config();
db();
console.log(process.env.PORT);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  next();
});

__dirname = path.resolve();
// const currentDirectory = __dirname;

app.use(express.json());
app.use("/api", require("./routes/CreateUser"));
app.use("/api/routes/DisplayData", DisplayData);
app.use("/api", require("./routes/EnterData"));
app.use("/api", require("./routes/OrderData"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.static(path.join(__dirname, "/mernapp/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "mernapp", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
