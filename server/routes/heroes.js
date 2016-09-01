var express = require('express');
var router = express.Router();
var Hero = require('../models/heroes');


router.get('/', function (req, res) {
  Hero.find({}, function (err, heroes) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(heroes);
  });
});

router.post('/', function (req, res) {
  console.log('POST', req.body);
  var hero = Hero(req.body); //book uses book model to create Hero document
  hero.save(function (err) { //save our document
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Hero.findByIdAndRemove(id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});









module.exports = router;
