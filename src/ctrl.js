angular.module('app').controller('main', function($scope, Webworker, $http, $q) {

    $scope.oneText = `function add(x){
    return x+3;
}`;

var testData = `describe("fn", function() {
        it("this should be true", function() {
            expect(run(3)).to.equal(6);
        });
        it("this should be false", function() {
            expect(run(1)).to.equal(6);
        });
    });`

    var webWorker = $http.get('./test.js');
    var chai = $http.get('./chai.js');
    var mocha = $http.get('./mocha.js');

    $q.all([chai, mocha, webWorker]).then(function(data) {
        webWorker = data[2].data;
        chai = data[0].data;
        mocha = data[1].data;
        var data = webWorker + chai + mocha;
        var injectPos = data.indexOf('//injectHere');
        data = data.substr(0, injectPos) + testData + data.substr(injectPos);


        Worker.createURL = function(func_or_string) {
            var str = (typeof func_or_string === 'function') ? func_or_string.toString() : func_or_string;
            var blob = new Blob(['self.onmessage =' + str], {
                type: 'text/javascript'
            });
            return window.URL.createObjectURL(blob);
        };

        $scope.runTest = function(fn) {
            var myWorker = Webworker.create(Worker.createURL(data));
            myWorker.run(fn).then(function(result) {
                $scope.results = result;
            });
        };

    })




});