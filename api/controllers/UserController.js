'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
    jwt = require('jsonwebtoken');

exports.login = function (req, res) {
  User.find(req.body, function (err, user) {
    if (err)
      res.send(err);
    var id = user.id;
    var token = jwt.sign({id}, process.env.SECRET, {
      expiresIn: 300
    })
    res.status(200).json({auth: true, token: token});
  });
};

exports.cadastrar = function (req, res) {
  var new_user = new User(req.body);
  new_user.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  })
};

exports.getAll = function (req, res) {
  User.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.status(200).json(user);
  })
}
