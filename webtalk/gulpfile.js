/* Dependences */

var gulp = require('gulp'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass');

/* Configuration task */

//gulp connect
gulp.task('connect', function(){
	connect.server({
		root: 'app',
		livereload: true
	});
});

//gulp html
gulp.task('html', function() {
	gulp.src('./app/*.html')
	.pipe(connect.reload())
});

//gulp sass
gulp.task('sass', function(){
	gulp.src('./sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./app/css'))
	.pipe(connect.reload())
});

//gulp js
gulp.task('js', function (){
	gulp.src('js/**/*.js')
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./app/js/'))
	.pipe(connect.reload())
});

gulp.task('watch', function(){
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch('css/**/*.css', ['sass']);
	gulp.watch('js/*.js', ['js']);
});

gulp.task('default', ['connect', 'watch']);