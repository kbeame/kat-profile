const gulp = require('gulp');
const eslint = require('gulp-eslint');

var frontendFiles = ['lib**/*.js', 'test/front-end/*.js', 'routes/**/*.js',
'models/**/*.js', 'gulpfile.js', 'server.js'];

gulp.task('lint', () => {
  return gulp.src(frontendFiles)
  .pipe(eslint({
    envs: [
      'mocha',
      'es6'
    ]
  }))
  .pipe(eslint.format());
});

gulp.task('default', ['lint']);
