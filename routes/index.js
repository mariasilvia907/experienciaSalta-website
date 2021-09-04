var express = require('express');

//const { title } = require('node:process');

var router = express.Router();
const data = require('../utils/data')
const blogNotes = require('../utils/blogNotes')

/* GET home page. */
router.get('/', function(req, res, next) {
  data.getAllExperiences((error, data) => {
    if(error){
      return res.send({
        error
      })
    }
const JSONBody = JSON.parse(data);
  data.getAllblogNotes((error, data) => {
    if(error){
      return res.send({
          error
        })
      }
  const JSONblogNotes = JSON.parse(blogNotes);
    return res.render('index', { 
      title: 'Inicio',
      slogan: 'Viajá antes de viajar',
      frase: 'Una nueva aventura está por comenzar',
      JSONBody, 
      JSONblogNotes
    });
  });
});
});

module.exports = router;