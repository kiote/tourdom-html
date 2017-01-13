const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const router = require('./routes/index')

app.engine('.hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));

app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, '/public')));
app.use('/', router);

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('App listening on port' + port +'!');
});
