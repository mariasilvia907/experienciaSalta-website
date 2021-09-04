var express = require('express');
var router = express.Router();
const data = require('../utils/data')
//const members = require('../utils/members')

/* GET nosotros page. */
/* router.get('/', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros' });
}); */

router.get('/', function(req, res, next) {
  data.getAllExperiences((error, data) => {
    if(error){
      return res.send({
        error
      })
    } 
    const JSONBody = JSON.parse(data);
    return res.render('nosotros', { 
      title: 'Nosotros',
      JSONBody  
    });
  }); 
})

module.exports = router;
