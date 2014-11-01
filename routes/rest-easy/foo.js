'use strict';

var dumbo = require('dumbo');

var Foo = function (data) {
  Object.keys(data).forEach(function (name) {
    this[name] = data[name];
  }, this);
};

exports.create = function (req, res) {
  res.jsonp(dumbo.create(new Foo(req.body)));
};

exports.read = function (req, res) {
  res.jsonp(dumbo.read());
};

exports.readOne = function (req, res) {
  res.jsonp(dumbo.read(req.params._id));
};

exports.update = function (req, res) {
  res.jsonp(dumbo.update(req.params._id, req.body));
};

exports.delete = function (req, res) {
  res.jsonp(dumbo.delete(parseInt(req.params._id, 10)));
};