var path = require('path');
var express = require('express');
var request = require('request');
var hbs = require('express-handlebars');
var app = express();

app.engine('.hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

const datasource = 'https://tourdom-birga.herokuapp.com/'

app.get('/', function (req, res) {
  request(datasource, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      var tours = JSON.parse(body);
      // console.log(tours);
    }
  })
  console.log('hi');
  res.render('home');
// convert content to json

// show content
  // res.json({});
})

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('App listening on port' + port +'!');
});
