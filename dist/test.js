self.onmessage = function(oEvent) {
    mocha.setup({
        ui: 'bdd',
        reporter: 'json'
    });
    var expect = chai.expect;

    /*injectHere*/

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

    var results = mocha.run();
    var dataInterval = setInterval(getData, 100, results);
};