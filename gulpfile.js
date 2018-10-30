var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', async function(){
    console.log('gulp task is created!');
});

gulp.task('html',function(done){
    console.log("imaging something useful being done to your HTML here.");
    done();
});

gulp.task('styles',function(){
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
    
});

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir:"app"
        }
    })

    gulp.watch('./app/index.html',function(done){
        browserSync.reload();
        done();
    });


    gulp.watch('./app/assets/styles/**/*.css',gulp.series('cssInject')); 
})


gulp.task('cssInject', gulp.series('styles'), function() {
    return gulp.src('./app/temp/styles/style.css')
        .pipe(browserSync.stream());
});