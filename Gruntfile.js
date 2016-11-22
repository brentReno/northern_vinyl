module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dev: {    // indicates that it will be used only during development
        files: {
          // destination // source file
          'server/public/styles/main.css': 'server/public/styles/main.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
};
