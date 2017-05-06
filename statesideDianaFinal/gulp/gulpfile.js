var gulp = require('gulp'), 
uglify = require('gulp-uglify');

var myScripts = 'js/app.js';
gulp.task('scripts', function(){ 
	return gulp.src(myScripts) 
     .pipe(uglify('app.min.js')) //comprime a main.min.js
     .pipe(gulp.dest('./js')); 
});

