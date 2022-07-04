var express = require("express");
var logger = require("morgan");

var cookieParser = require('cookie-parser')

var app = express();

app.use(express.urlencoded({extended: false}))
app.use(logger("dev"));
app.use(cookieParser());

app.use(express.json())


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/new', (req,res) => {
    res.sendFile(__dirname + "/form.html");
})

app.get('/user/:username', (req,res) => {
    var username = req.params.username;
    res.send(username);
})
app.post('/new', (req,res) => {
    res.json(req.body);
})

app.listen(3000, () => {
  console.log("server is listing on port 3k");
});
