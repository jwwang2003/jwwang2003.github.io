(function () {

    var headerController = function ($scope, $location)
    {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    };

    angular.module('sampleApp').controller('HeaderController',headerController);
}());