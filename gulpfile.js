var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default', async function(){
    console.log('gulp task is created!');
});

gulp.task('html',function(done){
    console.log("imaging something useful being done to your HTML here.");
    done();
});

gulp.task('styles',function(){
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
    
});

gulp.task('watch', function() {
    gulp.watch('./app/index.html',gulp.parallel('html'));
    gulp.watch('./app/assets/styles/**/*.css',gulp.parallel('styles'));
}); 