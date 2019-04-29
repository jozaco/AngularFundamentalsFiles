'use strict';

eventsApp.controller('EventCtrl',
    function EventCtrl($scope, EventData, $routeParams) {
        $scope.sortOrder = 'name';

        EventData.getEvent($routeParams.eventId)
            .$promise
            .then(function (data) {
                $scope.event = data;
                console.log(data);
            })
            .catch(
                function (error) {
                    console.log(error);
                });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }



    }
);