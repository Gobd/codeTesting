self.onmessage = function(oEvent) {
    mocha.setup('bdd');
    var expect = chai.expect;

    /*injectHere*/

    var getData = function(results) {
        if (results.count === results.total) {
            clearInterval(dataInterval);
            delete results.total;
            self.postMessage(results);
        }
    };

    setTimeout(function() {
        clearInterval(dataInterval);
    }, 2200);

    var results = mocha.run();
    var dataInterval = setInterval(getData, 100, results);
};

// /\(eval at <anonymous>.*?\:.*?\:/g
// then subtract 6 from line and 2 from character to get where stack error happens