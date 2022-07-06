var express = require('express');
var app = express();

var coockiParseer = require("cookie-parser");
var logger =  require('morgan');
app.use(express.urlencoded({extended:false}));
app.use(coockiParseer());
app.use(logger('dev'));
var apps = express.static();
app.use('/',(req,res) => {
    res.send(req.body)
    console.log(req.method);
    console.log(req.url);
    console.log(new time());
})

app.listen(3000 ,() => {
    console.log("server is listing on port 3000")
})