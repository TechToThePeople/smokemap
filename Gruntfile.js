module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-bower-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
//require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

grunt.initConfig({
  concat: {
      // concat task configuration goes here.
   },
  uglify: {
      //         // uglify task configuration goes here.
      //  },
  },
  bower_concat: {
  all: {
      dest: 'build/_bower.js',
      cssDest: 'build/_bower.css',
      exclude: [
            'modernizr'
                  ],
      dependencies: {
          },
      bowerOptions: {
            relative: false
          }
    }
  },

cssmin: {
    build: {
            src: 'build/css/master.css',
            dest: 'build/css/master.css'
        }
},
});

//grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('default', ['bower_concat']);

};
