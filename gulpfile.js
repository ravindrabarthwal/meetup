
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('default',['styles','minifyjs','minifyhtml'],function() {
	gulp.watch('./sass/**/*.scss',['styles']);
	gulp.watch('./script/**/*.js',['minifyjs']);
	gulp.watch('./templates/**/*.html',['minifyhtml']);
});

gulp.task('styles', function() {
	 return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
    		browsers: ['last 2 versions']
    	}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minifyjs', function() {
  gulp.src('./script/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('minifyhtml', function() {
  return gulp.src('./templates/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
});