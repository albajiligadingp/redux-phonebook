const express = require('express');
const router = express.Router();
const Phonebook = require('../models/phonebook');

router.get('/', function(req, res, next) {
  Phonebook.find({}, function(err, data) {
    res.status(200).json(data);
  })
});

router.post('/', function(req, res, next) {
  Phonebook.create({id: req.body.id, name: req.body.name, phone: req.body.phone}, function (err, data) {
    res.status(201).json({
      status: 'SUCCESS',
      data: data
    });
  })
});

router.put('/:id', function(req, res, next) {
  Phonebook.findOneAndUpdate({id: Number(req.params.id)}, {name: req.body.name, phone: req.body.phone}, {new: true}, function(err, data) {
    if (err) return console.log(err); 
    res.status(201).json({
      status: 'SUCCESS',
      data: data
    });
  })
});

router.delete('/:id', function(req, res, next) {
  Phonebook.findOneAndRemove({id: Number(req.params.id)}, function(err, data) {
    res.status(201).json({
      status: 'SUCCESS',  
      data: data
    });
  })
});

module.exports = router;
