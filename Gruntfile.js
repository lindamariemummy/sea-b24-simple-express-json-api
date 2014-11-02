module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jscs');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ["*.js"]
    },

    simplemocha: {
      src: ['test/**/*.js']
    },

    //thanks to https://www.npmjs.org/package/grunt-contrib-jscs!
   jscs: {
        all: {
            options: {
               "preset": "airbnb",
            },
            files: {
              src: ["server.js"]
            }
        }
    }
  });


  grunt.registerTask('test', ['jshint', 'simplemocha','jscs']);
  grunt.registerTask('default',  ['test']);
};
