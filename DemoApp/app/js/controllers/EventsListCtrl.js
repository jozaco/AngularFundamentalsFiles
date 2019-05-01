'use strict';

eventsApp.controller('EventsListCtrl',
    function EventsListCtrl($scope, EventData, $route) {
        //$scope.events = EventData.getAllEvents();
        $scope.events = $route.current.locals.eventsList;
    });