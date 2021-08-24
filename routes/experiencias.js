var express = require('express');
var router = express.Router();

/* GET experiencias page. */
router.get('/', function(req, res, next) {
  res.render('experiencias', {title: 'Experiencias'});
});

module.exports = router;