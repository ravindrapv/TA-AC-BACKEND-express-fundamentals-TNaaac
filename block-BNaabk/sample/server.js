var express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.end("welcome to express");
});


app.listen(3000,() =>{
    console.log("server listing on the port 3k");
})