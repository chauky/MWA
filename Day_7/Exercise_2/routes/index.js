var express = require('express');
var mongo = require('mongoskin');
var router = express.Router();


var db = mongo.db('mongodb://localhost:27017/myDB', { native_parser: true });
var myCollection = db.collection('homework7');
myCollection.findOne(function (err, result) {
  if (err) {
    console.log("error occurs");
  };
  console.log(result);
  db.close();
});
/* GET home page.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
