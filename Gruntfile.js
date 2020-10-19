module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    prettier: {
      files: {
        src: ['Gruntfile.js', 'src/**/*.scss', 'src/**/*.js', 'src/**/*.json'],
      },
    },
  })

  grunt.loadNpmTasks('grunt-prettier')
}
