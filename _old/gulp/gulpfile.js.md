## gulpfile.js

### CSS圧縮、SASSコンパイル→圧縮、watch、のサンプル

```
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var rename = require('gulp-rename');
var minifyJS = require('gulp-uglify');

gulp.task('scss', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
});

gulp.task('js', function(){
  return gulp.src('_js/*.js')
    .pipe(minifyJS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js'))
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['scss']);
  gulp.watch('_js/*.js', ['js']);
});

gulp.task('default', [ 'scss', 'js' ]);
```
