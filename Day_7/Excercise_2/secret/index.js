var express = require('express');
var mongo = require('mongoskin');
var crypto = require("crypto");
var router = express.Router();


var db = mongo.db('mongodb://localhost:27017/myDB', { native_parser: true });
var myCollection = db.collection('homework7');
var msgDecrypt;
myCollection.findOne(function (err, result) {
  if (err) {
    console.log("error occurs");
  };
  msgDecrypt=decrypt('asaadsaad',result.message);
  db.close();
});

function decrypt(key, data) {
  var decipher = crypto.createDecipher('aes-256-cbc', key);
  var decrypted = decipher.update(data, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');

  return decrypted;
}


/* GET home page.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: msgDecrypt });
});

module.exports = router;
