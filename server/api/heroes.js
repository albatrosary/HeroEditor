'use strict';

exports = module.exports = function(app) {
  
  const items = require('./app.json');

  app.get('/app/heroes', function(req, res) {
    res.status(200).json(items);
  });

  app.get('/app/heroes/:id', function(req, res) {
    let id = req.body.id;

    let item = items.data.filter((element, index, array) => {
      return (element >= id);
    });
    res.status(200).json(item);
  });

  app.delete('/app/heroes/:id', function(req, res) {
      let id = req.body.id;
      items.data.splice(id, 1);
      res.status(200).json();
  })

  app.put('/app/heroes/:id', function(req, res) {
      let id = req.body.id;
      res.status(200).json();
  });
};