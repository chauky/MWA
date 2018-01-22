var express = require('express');
var router = express.Router();

var grades = [
  {
    id: 1,
    name: 'Asaad Saad',
    course: 'CS572',
    grade: 95
  }
];

//GET

router.get('/grades', function (req, res) {
  res.send(grades);
});

router.get('/grades/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);
  var result = grades.filter(r => r.id === id)[0];

  if (!result) {
    res.sendStatus(404);
  } else {
    res.send(result);
  }
});

//POST
router.post('/grades', function (req, res) {
  req.checkBody({
    'id': {
      notEmpty: true,
      errorMessage: 'id is missing.'
    },
    'name': {
      notEmpty: true,
      errorMessage: 'name is missing.',

    },
    'course': {
      notEmpty: true,
      errorMessage: 'course is missing.'
    },
    'grade': {
      notEmpty: true,
      errorMessage: 'grade is missing.'
    }
  });
  var item = req.body;
  if (!item.id) {
    return res.sendStatus(500);
  }

  grades.push(item);

  res.send('/grades/' + item.id);
});

module.exports = router;

//PUT
router.put('/grades/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);
  var existingItem = grades.filter(r => r.id === id)[0];

  if (!existingItem) {
    let item = req.body;
    item.id = id;
    grades.push(item);
    res.setHeader('Location', '/grades/' + id);
    res.sendStatus(201);
  } else {
    existingItem.name = req.body.name;
    res.sendStatus(204);
  }
});

//Delete
router['delete']('/grades/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);
  var existingItem = grades.filter(r => r.id === id)[0];

  if (!existingItem) {
    return res.sendStatus(404);
  }

  grades = grades.filter(r => r.id !== id);
  res.sendStatus(204);
});