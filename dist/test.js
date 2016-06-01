// this is a webworker!
self.onmessage = function(oEvent) {
    self.importScripts('chai.js', 'mocha.js');
    mocha.setup({
        ui: 'bdd',
        reporter: 'json'
    });
    var expect = chai.expect;

    // pass run the arguments that need to passed to the user-inputted function
    // run will return the result of invoking that function with those arguments
    function run() {
        var args = Array.prototype.slice.call(arguments, 0);
        return eval('(' + oEvent.data + ')(' + args + ')'); // jshint ignore:line
    }

    describe("fn", function() {
        'use strict';
        it("this should be true", function() {
            expect(run(3)).to.equal(6);
        });
        it("this should be false", function() {
            expect(run(1)).to.equal(6);
        });
    });

    var getData = function(data) {
        if (data.count === data.total) {
            clearInterval(dataInterval);
            delete data.total;
            self.postMessage(data);
        }
    };

    setTimeout(function() {
        clearInterval(dataInterval);
    }, 2200);

    var dataInterval = setInterval(getData, 100, mocha.run());
};