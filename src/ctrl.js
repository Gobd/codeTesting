angular.module('app').controller('main', function($scope, Webworker) {

  $scope.oneText = `function add(x) {
    return x+3;
}`;

    $scope.runTest = function(fn) {
        var myWorker = Webworker.create('test.js');
        myWorker.run(fn).then(function(result) {
            console.log('result from ctrl', result);
        });
    };

});