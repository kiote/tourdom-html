var path = require('path');
var express = require('express');
var request = require('request');
var hbs = require('express4-handlebars');
var app = express();

app.engine('hbs', hbs.__express);
app.set('view engine', 'hbs');
var views = path.join(__dirname, 'views');
app.set('views', views);
hbs.set('layout_dir', path.join(views, 'layout'));

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
