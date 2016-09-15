'use strict';

exports = module.exports = function(app) {
  
  var items = require('./app.json');

  app.get('/app/heroes', function(req, res) {
    res.status(200).json(items);
  });

  app.get('/app/heroes/:id', function(req, res) {
    console.log('/app/heroes/:id');
  });
};