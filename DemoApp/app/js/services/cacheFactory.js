'use strict';

eventsApp.factory('CacheFactory', function ($cacheFactory) {
    return $cacheFactory('CacheFactory', { capacity: 3 });
});