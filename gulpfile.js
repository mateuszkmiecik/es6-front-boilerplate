const gulp = require('gulp');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');


gulp.task('build', () => {
    return browserify({entries: './src/app.js', extensions: ['.js', '.es6'], debug: true})
        .transform(babel)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], () => {
    gulp.watch('src/**/*.js', ['build']);
});

gulp.task('default', ['watch']);
