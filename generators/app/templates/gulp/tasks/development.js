const gulp        = require('gulp');
const runSequence = require('run-sequence');

gulp.task('dev', () => {

  runSequence('eslint', 'browserify', 'watch');

});
