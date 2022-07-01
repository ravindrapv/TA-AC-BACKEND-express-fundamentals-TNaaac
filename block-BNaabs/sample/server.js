var express = require("express");
var logger = require("morgan");

var cookieParser = require('cookie-parser')

var app = express();


app.use(logger("dev"));
app.use(cookieParser());

app.use(express.json())


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/form', (req,res) => {
    res.sendFile(__dirname + "/form.html");
    console.log(req.query);
    res.send(req.query);
})

app.get('/new/:username', (req,res) => {
    var username = req.params.username;
    res.send(username);
})
app.post('/form', (req,res) => {
    res.sendFile(__dirname + "/form.html");
    console.log(req.query);
    res.send(req.query);
})

app.listen(4000, () => {
  console.log("server is listing on port 4k");
});
