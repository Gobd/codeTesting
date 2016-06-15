angular.module('app').controller('main', function($scope, Webworker, $http, $q) {

    Worker.createURL = function(func_or_string) {
        var str = (typeof func_or_string === 'function') ? func_or_string.toString() : func_or_string;
        var blob = new Blob(['self.onmessage =' + str], {
            type: 'text/javascript'
        });
        return window.URL.createObjectURL(blob);
    };

    $scope.oneText = `function add(x){
    return x + 4;
}`;

    var testData = `
    describe("fn", function() {
        var x;
        it("this should be true", function() {
            eval(dataz)
            expect(add(4)).to.equal(7);
        });
        it("this should be false", function() {
            eval(dataz)
            expect(add(5)).to.equal(8);
        });
    });`

    var webWorker = $http.get('./test.js');
    var mochaChaiMin = $http.get('./mochaChaiMin.js');

    $scope.runTest = function() {
        $q.all([mochaChaiMin, webWorker]).then(function(data) {
            var mochaChaiMin = data[0].data;
            var webWorkerData = data[1].data;
            var injectPos = webWorkerData.indexOf('/*injectHere*/');
            var userData = $scope.oneText.replace(/\n/g, '')
            data = webWorkerData.substr(0, injectPos) + testData.replace(/dataz/g, "'" + userData + "'") + webWorkerData.substr(injectPos) + mochaChaiMin;

            var myWorker = Webworker.create(Worker.createURL(data));
            myWorker.run().then(function(result) {
                $scope.results = result;
            });

        })
    }




});