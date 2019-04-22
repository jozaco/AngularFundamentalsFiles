'use strict';

eventsApp.factory('EventData', function ($resource) {
    let resource = $resource('/data/event/:id', { id: '@id' });
    return {
        getEvent: function () {
            return resource.get({ id: 1 });
        },
        saveEvent: function (event) {
            event.id = 999;
            return resource.save(event);
        }
    }
});
