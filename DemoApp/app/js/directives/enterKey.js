'use strict';

eventsApp.directive('enterKey', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.on('keydown', function (event) {
                if (event.keyCode == 13) {
                    element.attributes('ng-click')();
                }
            });
        }
    }
})