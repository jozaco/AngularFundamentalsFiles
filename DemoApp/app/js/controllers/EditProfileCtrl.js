'use strict';

eventsApp.controller('EditProfileCtrl',
    function EditProfileCtrl($scope, GravatarUrlBuilder) {

        $scope.getAvatarUrl = function (email) {
            return GravatarUrlBuilder.buildGravatarUrl(email);
        }

    });