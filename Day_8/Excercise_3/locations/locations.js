var express = require('express');
var mongo = require('mongoskin');
var router = express.Router();


var db = mongo.db('mongodb://localhost:27017/locations', { native_parser: true });
var myCollection = db.collection('locations');


//GET/READ

router.get('/locations', function (req, res) {
  myCollection.find().toArray(function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.get('/locations/:name', function (req, res) {
  console.log(req.params.name);
  myCollection.find({name:req.params.name}).toArray(function (err, result) {
    
    if (err) throw err;
    res.send(result);
  });

});

//POST
router.post('/locations', function (req, res) {
  var item = req.body;

  locations.push(item);

  res.send('/locations/' + item.name);
});

//PUT
router.put('/locations/:id', function (req, res) {
  var n = req.params.name;
  var existingItem = locations.filter(r => r.name === n)[0];

  if (!existingItem) {
    let item = req.body;
    item.name = name;
    locations.push(item);
    res.setHeader('Location', '/locations/' + name);
    res.sendStatus(201);
  } else {
    existingItem.name = req.body.name;
    res.sendStatus(204);
  }
});

//Delete
router['delete']('/locations/:name', function (req, res) {
  var n = req.params.name;
  var existingItem = locations.filter(r => r.name === n)[0];

  if (!existingItem) {
    return res.sendStatus(404);
  }

  locations = locations.filter(r => r.name !== n);
  res.sendStatus(204);
});

module.exports = router;