var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser');

var app = express()

app.use(cookieParser());
app.use(logger("dev"))
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.get('/',(req,res) => {
    res.send('<h2>welcome to express</h2>');
});

app.get('/about',(req,res,next) => {
   res.send('My name is qwerty');
   next();
})
app.get('/new',(req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/new',(req,res) => {
    res.json(req.body);
})

app.post('/json',(req,res) => {
    res.json(req.body);
})

app.use((req,res) => {
    res.send("page not found error 404")
})
app.use((err,req,res,next) => {
    res.send(err);
})

app.listen((5000),() => {
    console.log('sever is listen on port 5k');
})
 

