'use strict';

eventsApp.directive('focusElement', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.focus();
        }
    }
});