define(function (require) {
    var suite = require('intern!object'),
        app = require('intern/dojo/node!../../src/app'),
        chai = require('intern/dojo/node!chai'), //dellivers promieses implementation used in setup method
        expect = chai.expect,
        chaiHttp = require('intern/dojo/node!chai-http'), //dellivers promieses implementation used in setup method
        q = require('intern/dojo/node!q'), //dellivers promieses implementation used in setup method
        portfinder = require('intern/dojo/node!portfinder'); //dellivers promieses implementation used in setup method

    var me = this;
    var api = function () {
        return chai.request('http://localhost:' + me.port);
    }

    suite({
        'setup': function () {
            chai.use(chaiHttp); //configure chai with chaiHttp
            chai.request.addPromises(q.Promise); //configure promise for chaiHttp

            var deferred = q.defer();
            portfinder.getPort(function (err, port) {
                me.port = port;
                me.server = app.listen(me.port, function () {
                    console.log('server is running on port %j', me.port);
                    deferred.resolve();
                });
            });
            return deferred.promise;

        },
        'teardown': function () {
            me.server.close();
        },
        'shoud test return status ok json': function () {
            return api()                                        //prepare url
                .get('/test')                                   //make a call
                .then(function (res) {                          //return call result
                    expect(res.body).to.eql({status: 'ok'});    //make assertions with chai
                });
        },
        'another test': function () {
            return api()
                .get('/test')
                .then(function (res) {
                    expect(res.body).to.eql({status: 'ok'});
                });
        }
    });
});
