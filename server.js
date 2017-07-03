var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Event = require('./api/models/eventListModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tim:tim@ds145302.mlab.com:45302/heroku_79pz8wb8'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/eventListRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
