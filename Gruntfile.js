module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Gruntfile.js', 'static/js/!(built).js']
    },

    concat: {
      js: {
        src: [
                'node_modules/jquery/dist/jquery.js',
                'node_modules/bootstrap/dist/js/bootstrap.min.js',
              ],
        dest: 'static/js/built.js'
      },
      css: {
        src: ['node_modules/bootstrap/dist/css/bootstrap.css',
              'node_modules/font-awesome/css/font-awesome.css'],
        dest: 'static/css/built.css'
      }
    },

    compass: {
      build: {
        options: {
            config: 'config/config.rb'
        }
      }
    },

    watch: {
      stylesheets: {
        files: ['static/sass/*.{css,scss,sass}'],
        tasks: 'compass',
      },
      scripts: {
        files: 'static/*.js',
        tasks: 'jshint',
      },
      modules: {
        files: 'node_modules/**/*.js',
        tasks: 'concat',
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
                                  'jshint',
                                  'compass',
                                  'concat:js',
                                  'concat:css',
                                  'watch'
                                ]);

};
