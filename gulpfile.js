var gulp = require('gulp');
var htmlv = require('gulp-html-validator');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require("gulp-imagemin");


// HTML Validate
gulp.task('valid', function () {
  gulp.src('assets/src/*.html')
    .pipe(htmlv())
    .pipe(gulp.dest('assets/dist'));
});


// CSS Tasks
gulp.task('css', function () {
  return gulp.src('assets/src/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4','ios_saf >= 8'],
        cascade: false
    }))
    .pipe(gulp.dest('assets/dist'));
});


// Image min Tasks
gulp.task('image', function() {
	gulp.src([
    'assets/src/images/*.+(jpg|jpeg|png|gif|svg)',
    'assets/src/images/**/*.+(jpg|jpeg|png|gif|svg)'
  ])
		.pipe(imagemin())
		.pipe(gulp.dest('assets/dist/images'));
});
