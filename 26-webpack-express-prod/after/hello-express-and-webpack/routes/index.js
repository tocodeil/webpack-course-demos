var express = require('express');
var router = express.Router();

let manifest;
if (process.env.NODE_ENV === 'production') {
  const manifestData = require('../public/manifest.json');
  manifest = (name) => manifestData[name];
} else {
  manifest = (name) => name;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', manifest });
});

module.exports = router;
