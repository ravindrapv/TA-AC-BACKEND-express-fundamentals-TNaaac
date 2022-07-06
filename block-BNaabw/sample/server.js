var express = require('express');
var app = express();

var coockiParseer = require("cookie-parser");
var logger =  require('morgan');
app.use(express.urlencoded({extended:false}));
app.use(coockiParseer());
app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));
console.log(__dirname)
app.get('/',(req,res) => {
  res.send('welcome');
});


app.get('/users',(req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(5000,() => {
    console.log("server is listing on port");
});