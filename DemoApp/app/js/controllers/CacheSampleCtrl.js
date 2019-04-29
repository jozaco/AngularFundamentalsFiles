eventsApp.controller('CacheSampleCtrl',
    function CacheSampleCtrl($scope, CacheFactory) {

        $scope.addToCache = function (key, value) {
            CacheFactory.put(key, value);
        };

        $scope.readFromCache = function (key) {
            return CacheFactory.get(key);
        };

        $scope.getCacheStats = function () {
            return CacheFactory.info();
        }
    });