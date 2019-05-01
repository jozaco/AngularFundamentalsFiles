'use strict';

eventsApp.directive('collapsible', function () {
    return {
        restrict: 'E',
        template: '<h4 class="well-title" ng-click="toggleVisibility()">{{ title }}</h4><div ng-show="visibility" ng-transclude></div>',
        transclude: true,
        scope: {
            title: '@'
        },
        controller: function ($scope) {
            $scope.visibility = false;

            $scope.toggleVisibility = function () {
                $scope.visibility = !$scope.visibility;
            }
        }
    }
});