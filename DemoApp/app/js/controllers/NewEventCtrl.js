'use strict';

eventsApp.controller('NewEventCtrl',
    function NewEventCtrl($scope, EventData) {

        $scope.saveEvent = function (event, newEventForm) {
            console.log(newEventForm);
            if (newEventForm.$valid) {
                EventData.saveEvent(event);
                console.log('Event ' + event.name + ' saved');
            }

        }

        $scope.cancelEvent = function () {
            window.location.href = "/newEvent.html";
        }
    });