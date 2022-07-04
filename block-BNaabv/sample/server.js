let express = require('express')
let logger = require('morgan')

let router = express.Router()

let app = express()

// app.use(cookieParser());
app.use(logger("dev"))

console.log('start');


router.get('/about',(req,res) => {
    res.send('Hello')
})

app.get('/',(req,res,next) => {
    try {
        res.send('Hello')
    } catch (error) {
        console.log(error);
        next()
    }
})

app.listen((4000,(err) => {
    if(err) console.log(err);
    console.log('sever is listen on port 4k');
}))
 

