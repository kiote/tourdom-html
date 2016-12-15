var path = require('path');
var express = require('express');
var request = require('request');
var hbs = require('express-handlebars');
var app = express();

app.engine('.hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, '/public')));

const datasource = 'https://tourdom-birga.herokuapp.com/'

app.get('/', function (req, res) {
  request(datasource, function (err, result, body) {
    if (!err && result.statusCode == 200) {
      var tours = JSON.parse(body);
      res.render('home', { 'tours': tours['tours'] });
    }
  })
})

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('App listening on port' + port +'!');
});
