module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            build: {
                src: 'dist/game.js',
                dest: 'dist/game.min.js'
            }
        },
        typescript: {
            base: {
                src: ['./index.ts', './src/**/*.ts'],
                dest: 'dist/game.js',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    outFile: 'dist/game.js',
                    sourceMap: true,
                    declaration: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['./index.ts', './src/**/*.ts'],
                tasks: ['typescript'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['typescript', 'watch']);
    grunt.registerTask('build', ['typescript', 'uglify']);
    grunt.registerTask('build-dev', ['typescript']);

};