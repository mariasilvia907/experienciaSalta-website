var express = require("express");

//const { title } = require('node:process');

var router = express.Router();
const utils = require("../utils/data");

//const blogNotes = require('../utils/blogNotes')

/* GET home page. */

router.get("/", function (req, res, next) {
  utils.getAllExperiences((error, data) => {
    if (error) {
      return res.send({
        error,
      });
    }

    const JSONBody = JSON.parse(data);

    utils.getAllBlogNotes((error, data) => {
      if (error) {
        return res.send({
          error,
        });
      }

      const blogNotes = JSON.parse(data);

      return res.render("index", {
        title: "Inicio",
        slogan: "Viajá antes de viajar",
        frase: "Una nueva aventura está por comenzar",
        JSONBody,
        blogNotes,
      });
    });
  });
});

module.exports = router;