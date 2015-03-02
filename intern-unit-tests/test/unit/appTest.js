define(function (require) {
    var suite = require('intern!object');
    var expect = require('intern/chai!expect');


    suite({
        'teting strings': function () {
            expect("Piotr").to.equal('Piotr');
        }
    });
});