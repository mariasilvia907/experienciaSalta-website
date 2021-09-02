var express = require('express');
var router = express.Router();

/* GET experiencias page. */
router.get('/', function(req, res, next) {
  res.render('experiencias', {
    title: 'Experiencias'
    slogan: 'Viajá antes de viajar',
    frase: 'Conocé Salta en 360º'
});
});

module.exports = router;