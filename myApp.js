require('dotenv').config(); //Challenge 6

let express = require('express');
let app = express();
let bodyParser = require('body-parser'); //Challenge 11

//Challenge 7
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  });

//Challenge 1
console.log("Hello World");

//Challenge 4
app.use("/public", express.static(__dirname + "/public"));

//Challenge 2,3
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

//Challenge 5,6
app.get("/json", function(req, res) {
    let message = "Hello json";
    
    if (process.env.MESSAGE_STYLE === "uppercase") {
      message = message.toUpperCase();
    }
  
    res.json({ "message": message });
});

//Challenge 8
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ time: req.time });
});

//Challenge 9
app.get('/:word/echo', function(req, res) {
    let word = req.params.word;  // Získanie slova z URL
    res.json({ echo: word });      // Odpoveď vo formáte { echo: word }
});

//Challenge 10
app.get('/name', function(req, res) {
    let firstName = req.query.first;
    let lastName = req.query.last;
    res.json({ name: `${firstName} ${lastName}` });
});

//Challenge 11
app.use(bodyParser.urlencoded({ extended: false }));

//Challenge 12
app.route('/name')
  .get((req, res) => {
    let { first, last } = req.query;
    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    let { first, last } = req.body;
    res.json({ name: `${first} ${last}` });
  });






















 module.exports = app;
