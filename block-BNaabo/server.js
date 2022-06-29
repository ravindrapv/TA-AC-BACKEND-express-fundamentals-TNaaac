var express = require("express");

var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.post("/json", (req, res) => {
  console.log(req.body); //captuering data
});
app.use(express.static(__dirname + "/publick"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("server is listing on port 3k");
});
