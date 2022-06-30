var express = require("express");
var logger = require("morgan");

var cookieParser = require('cookie-parser')

var app = express();


app.use(logger("dev"));
app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.cookie("username", "suraj");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(4000, () => {
  console.log("server is listing on port 4k");
});
