const express = require('express');
const router = express.Router();
const request = require('request');

const settings = require('./../settings')
const config = settings.config();

const datasource = config.api_url;

router.get('/', function (req, res) {
  url = datasource + req.originalUrl;
  request(url, (err, result, body) => {
    if (!err && result.statusCode == 200) {
      var tours = JSON.parse(body);
      res.render('home', { 'tours': tours['tours'] });
    }
  })
});

module.exports = router;
