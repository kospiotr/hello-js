module.exports = function (grunt) {

    grunt.initConfig({
        intern: {
            unit_testing: {
                options: {
                    config: 'test/intern-config',
                    suites: ['test/unit/appTest']
                }
            }
        }
    });

    grunt.loadNpmTasks('intern');

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['intern']);

};