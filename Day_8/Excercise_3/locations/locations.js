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
  myCollection.find({ name: req.params.name }).toArray(function (err, result) {

    if (err) throw err;
    res.send(result);
  });

});

//POST
router.post('/locations', function (req, res) {
  var item = req.body;
  myCollection.insert(item, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

//PUT
router.put('/locations/:name', function (req, res) {
  var n = req.params.name;
  var item = req.body;
  myCollection.update({ name: n }, item, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});


//Delete
router['delete']('/locations/:name', function (req, res) {
  var n = req.params.name;
  myCollection.remove({ name: n }, function (err, result) {
    if (err) throw err;
    res.send("Deleted");
  });
});

module.exports = router;