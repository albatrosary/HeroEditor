'use strict';

exports = module.exports = function(app) {
  
  const items = require('./app.json');

  app.get('/app/heroes', function(req, res) {
    res.status(200).json(items);
  });

  app.get('/app/heroes/:id', function(req, res) {
    let id = req.params.id;

    let item = items.data.filter((element, index, array) => {
      return (element === id);
    });
    res.status(200).json(item);
  });

  app.post('/app/heroes', function(req, res) {
    let item = req.body;
    
    let id = items.data[items.data.length-1].id;
    item['id'] = id + 1;
    items.data.push(item);
    res.status(200).json(items);
  });

  app.delete('/app/heroes/:id', function(req, res) {
      let id = req.params.id;
      let _index;
      items.data.filter((element, index, array) => {
        if (element.id == id) _index = index;
        return (element.id === id);
      });
      items.data.splice(_index, 1);
      res.status(200).json();
  })

  app.put('/app/heroes/:id', function(req, res) {
      let id = req.params.id;
      let item = req.body;
      let _index;
      items.data.filter((element, index, array) => {
        if (element.id == id) _index = index;
        return (element.id === id);
      });;
      items.data[_index] = item;
      res.status(200).json();
  });
};