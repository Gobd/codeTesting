angular.module('app').controller('main', function($scope, Webworker) {

    $scope.runTest = function(fn) {
        var myWorker = Webworker.create('test.js');
        myWorker.run(fn).then(function(result) {
            $scope.results = result;
        });
    };

});