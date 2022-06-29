var express = require('express');

var app = express();

function logger(req,res,next){
    console.log(req.method,req.url);
    next();
}

app.use(logger)

app.get('/',(req,res) => {
    res.end("welcome thisis express and midlewer assignment");
})


app.listen(4000, () => {
    console.log("server listing on port 4000");
})
