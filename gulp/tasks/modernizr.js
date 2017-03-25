var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
	return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scrtips/**/*.js'])
		.pipe(modernizr({
			"option": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest('./app/temp/scripts'));
});