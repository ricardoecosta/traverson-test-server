'use strict';

/*
 *
 *  _____________
 *  |EX|        |
 * 5|IT|   __   |_____
 *  |     |  |        |
 * 4|__ __|  |        |
 *  |     |  |        |
 * 3|     |  |__ __   |
 *  |  |  |        |  |
 * 2|  |  |   __   |  |
 *  |ST|     |        |
 * 1|RT|__ __|__ __ __|
 *   1  2  3  4  5  6
 *
 */

var express = require('express')
  , router = express.Router();


[
  'get',
  'post',
  'put',
  'patch',
  'delete',
].forEach(function(verb) {

  router[verb]('/start', function(req, res) {
    return res.json({ enter: '/maze/1/1', });
  });

  router[verb]('/1/1', function(req, res) {
    return res.json({ north: '/maze/1/2' });
  });

  router[verb]('/1/2', function(req, res) {
    return res.json({ north: '/maze/1/3', south: '/maze/1/1', });
  });

  router[verb]('/1/3', function(req, res) {
    return res.json({ east: '/maze/2/3', south: '/maze/2/1', });
  });

  router[verb]('/1/4', function(req, res) {
    return res.json({ north: '/maze/1/5', east: '/maze/2/4', });
  });

  router[verb]('/1/5', function(req, res) {
    return res.json({ south: '/maze/1/4', leave: '/maze/exit',  });
  });

  router[verb]('/2/1', function(req, res) {
    return res.json({ north: '/maze/2/2', east: '/maze/3/1', });
  });

  router[verb]('/2/2', function(req, res) {
    return res.json({ north: '/maze/2/3', south: '/maze/2/1', });
  });

  router[verb]('/2/3', function(req, res) {
    return res.json({ south: '/maze/2/2', west: '/maze/1/3', });
  });

  router[verb]('/2/4', function(req, res) {
    return res.json({ north: '/maze/2/5', west: '/maze/1/4', });
  });

  router[verb]('/2/5', function(req, res) {
    return res.json({ east: '/maze/3/5', south: '/maze/2/4', });
  });

  router[verb]('/3/1', function(req, res) {
    return res.json({ north: '/maze/3/2', west: '/maze/2/1', });
  });

  router[verb]('/3/2', function(req, res) {
    return res.json({
      north: '/maze/3/3',
      east: '/maze/4/2',
      south: '/maze/3/1',
    });
  });

  router[verb]('/3/3', function(req, res) {
    return res.json({ north: '/maze/3/4', south: '/maze/3/2', });
  });

  router[verb]('/3/4', function(req, res) {
    return res.json({ south: '/maze/3/3', });
  });

  router[verb]('/3/5', function(req, res) {
    return res.json({ east: '/maze/4/5', west: '/maze/2/5', });
  });

  router[verb]('/4/1', function(req, res) {
    return res.json({ east: '/maze/5/1', });
  });

  router[verb]('/4/2', function(req, res) {
    return res.json({ east: '/maze/5/2', west: '/maze/3/2', });
  });

  router[verb]('/4/3', function(req, res) {
    return res.json({ north: '/maze/4/4', east: '/maze/5/3', });
  });

  router[verb]('/4/4', function(req, res) {
    return res.json({
      north: '/maze/4/5',
      east: '/maze/5/4',
      south: '/maze/4/3',
    });
  });

  router[verb]('/4/5', function(req, res) {
    return res.json({ south: '/maze/4/4', west: '/maze/3/5', });
  });

  router[verb]('/5/1', function(req, res) {
    return res.json({
      north: '/maze/5/2',
      east: '/maze/6/1',
      west: '/maze/4/1',
    });
  });

  router[verb]('/5/2', function(req, res) {
    return res.json({ south: '/maze/5/1', west: '/maze/4/2', });
  });

  router[verb]('/5/3', function(req, res) {
    return res.json({
      north: '/maze/5/4',
      east: '/maze/6/3',
      west: '/maze/4/3',
    });
  });

  router[verb]('/5/4', function(req, res) {
    return res.json({
      east: '/maze/6/4',
      south: '/maze/5/3',
      west: '/maze/4/4',
    });
  });

  router[verb]('/6/1', function(req, res) {
    return res.json({ north: '/maze/6/2', west: '/maze/5/1', });
  });

  router[verb]('/6/2', function(req, res) {
    return res.json({ north: '/maze/6/3', south: '/maze/6/1', });
  });

  router[verb]('/6/3', function(req, res) {
    return res.json({
      north: '/maze/6/4',
      south: '/maze/6/2',
      west: '/maze/5/3',
    });
  });

  router[verb]('/6/4', function(req, res) {
    return res.json({ south: '/maze/6/3', west: '/maze/5/4', });
  });

  router[verb]('/exit', function(req, res) {
    return res.json({ status: 'finished' });
  });
});

module.exports = router;
