define(function (require) {
    var suite = require('intern!object');
  var expect = require('intern/chai!expect');


    suite({
        'should host file': function () {
            var app = require('intern/dojo/node!../../src/app');
            expect(app.sayHello("Piotr")).to.equal('Hi, Piotr');
        }
    });
});