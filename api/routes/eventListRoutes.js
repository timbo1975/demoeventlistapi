'use strict';
module.exports = function(app) {
  var eventList = require('../controllers/eventListController');

  // eventList Routes
  app.route('/events')
    .get(eventList.list_all_events)
    .post(eventList.create_an_event);

  app.route('/events/:eventId')
    .get(eventList.read_an_event)
    .put(eventList.update_an_event)
    .delete(eventList.delete_an_event);
};

