'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let server = require('http').createServer(app);
let port =  process.env.PORT || 8001;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTION');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Start server
server.listen(port, process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined, function() {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

// API definition
require('./api/heroes')(app);

exports = module.exports = app;
