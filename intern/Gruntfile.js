module.exports = function (grunt) {

    grunt.initConfig({
        intern: {
            unit_testing: {
                options: {
                    config: 'tests/intern',
                    suites: ['tests/unit/appTest'],
                    reporters: ['console', 'lcovhtml', 'cobertura']
                }
            }
        }
    });
    grunt.loadNpmTasks('intern');

    grunt.registerTask('test', ['intern']);

};
