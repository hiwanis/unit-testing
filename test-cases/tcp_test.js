const net = require('net');

describe('Test tcp server', function () {
    it('Should reply with some err message if any', function (done) {
        // Set up a client and connect to port 31337 (or whatever port you use)
        var client = net.connect({ port: 7889 },
            function() {
                // Send some data
                client.write("Let's send this data!");
            }
        );

        // When data is returned from server
        client.on('data', function(data) {
            // Let's make sure data equals the correct message
            data.should.equal('reply with some err message if any');
            client.end();
            done();
        });
    });
});