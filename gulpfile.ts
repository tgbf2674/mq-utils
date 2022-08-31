// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const gulp = require('gulp')
gulp.task('copy_resource', () => {
  return gulp.src('./func/*')
    .pipe(gulp.dest('./'))
})

gulp.task('build', gulp.series('copy_resource'))
