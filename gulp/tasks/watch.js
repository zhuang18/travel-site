var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

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

    gulp.watch('./app/assets/styles/**/*.css', {}, gulp.series('styles'));
})