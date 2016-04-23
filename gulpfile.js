var gulp=require('gulp');

var stylus=require('gulp-stylus');

var concat=require('gulp-concat');

var uncss=require('gulp-uncss');

var refresh=require('gulp-refresh');

gulp.task('styleCompiler', function(){
    return gulp.src("styles.styl")
    .pipe(stylus())
    .pipe(gulp.dest("."));
});

gulp.task("concatScripts",function(){
    gulp.src([
        'jquery.js',
        'angular.min.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./js'));
});

var files =['seat.html'],
    options =

gulp.task('uncss',function(){
    return gulp.src('styles.css')
    .pipe(uncss({
        html: ['seat.html']
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('watch',function(){
    refresh.listen('seat.html');
    gulp.watch(['styles.css', 'styles.styl']);
})




gulp.task('default',['styleCompiler', 'concatScripts','uncss'],function(){
});
