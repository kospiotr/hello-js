module.exports = function (grunt) {

    grunt.initConfig({
        intern: {
            e2e_testing: {
                options: {
                    config: 'test/intern-config',
                    suites: ['test/e2e/testRestTest']
                }
            }
        }
    });

    grunt.loadNpmTasks('intern');

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['intern']);

};
