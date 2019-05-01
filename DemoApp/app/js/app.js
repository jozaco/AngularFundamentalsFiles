'use strict';

let eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/newEvent.html',
                controller: 'NewEventCtrl'
            }
        );
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/eventsList.html',
                controller: 'EventsListCtrl',
                resolve: {
                    eventsList: function (EventData) {
                        return EventData.getAllEvents().$promise;
                    }
                }
            }
        );
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/eventDetails.html',
                controller: 'EventCtrl',
                resolve: {
                    event: function ($route, EventData) {
                        return EventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            }
        );
        $routeProvider.when('/editProfile',
            {
                templateUrl: 'templates/editProfile.html',
                controller: 'EditProfileCtrl'
            }
        );
        $routeProvider.when('/about',
            {
                template: 'Hi there'
            }
        );
        $routeProvider.when('/sampleDirective', {
            templateUrl: 'templates/sampleDirective.html',
            controller: 'SampleDirectiveCtrl'
        })

        $routeProvider.otherwise({ redirectTo: '/events' });
        $locationProvider.html5Mode(true);

    });
