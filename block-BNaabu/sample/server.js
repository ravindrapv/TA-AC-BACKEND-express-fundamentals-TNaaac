var express = require('express');
var logger = require('morgan');
var cookiParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));
app.use(cookiParser());

app.get('/',(req,res,next) => {
    res.send('welcome to error handel middelwer');
    next();
})

app.get('/about', (req,res) => {
    res.send('this is the About page');
});

app.use((req, res, next) => {
    // if requested url is /admin throw error
    if (req.url === "admin") {
      return next("Unauthorized");
    }
    // other let it pass to next middleware by simply calling next()
    next();
  });

  app.get((err,req,res,next) => {
      res.send('err 404 page not found');
  })


  app.listen((3000,() =>{
      console.log("port is listenig on 3k")
  }))