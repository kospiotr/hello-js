define(function (require) {
    var suite = require('intern!object');
    var expect = require('intern/chai!expect');


    suite({
        'testing strings': function () {
            expect("Piotr").to.equal('Piotr');
        }
    });
});