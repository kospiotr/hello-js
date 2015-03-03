define(function (require) {
    var suite = require('intern!object');
    var expect = require('intern/chai!expect');
    var instance = require('intern/dojo/node!../../src/calculator');


    suite({
        'should add 1 and 2 which equals 3': function () {
            expect(instance.add(1,2)).to.equal(3);
        },
        'should add 5 and 6 which equals 11': function () {
            expect(instance.add(5,6)).to.equal(11);
        }
    });
});