'use strict';

eventsApp.factory('EventData', function ($resource) {
    let resource = $resource('/data/event/:id', { id: '@id' });
    return {
        getEvent: function (eventId) {
            return resource.get({ id: eventId });
        },
        saveEvent: function (event) {
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents: function () {
            return resource.query();
        }
    }
});
