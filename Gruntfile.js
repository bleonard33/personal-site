module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      js: {
        src: [
                'node_modules/jquery/dist/jquery.js',
                'node_modules/bootstrap/dist/js/bootstrap.min.js',
                'node_modules/angular/angular.js',
                'static/js/index.js',
                'static/js/controllers/*.js'
              ],
        dest: 'static/dist/built.js'
      },
      css: {
        src: [
                'node_modules/bootstrap/dist/css/bootstrap.css',
                'node_modules/font-awesome/css/font-awesome.css',
                'static/css/project.css'
              ],
        dest: 'static/dist/built.css'
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
        tasks: ['compass', 'concat:css']
      },
      scripts: {
        files: 'static/**/*.js',
        tasks: 'concat:js'
      },
      modules: {
        files: 'node_modules/**/*.js',
        tasks: 'concat:js',
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
                                  'compass',
                                  'concat:js',
                                  'concat:css',
                                  'watch'
                                ]);

};
