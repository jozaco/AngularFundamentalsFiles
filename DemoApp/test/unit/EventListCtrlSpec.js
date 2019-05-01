'use strict';

describe('EventListCtrl', function () {

    beforeEach(module("eventsApp"));

    beforeEach(inject(function ($controller) {
        $controllerConstructor = $controller;
    }))

    it('should set the scope events to the result of eventData.getAllEvents', function () {
        let mockEvents = {};

        let controller = $controllerConstructor('EventListCtrl', [])

        expect(scope.event).toBe(mockEvents);
    });
})