var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    server = require('gulp-connect'),
    concat = require('gulp-concat-css'),
    jade = require('gulp-jade'),
    jsConcat = require('gulp-concat');

var paths = {
    'scripts':[
        'bower_components/chartist/dist/chartist.min.js',
        'assets/js/main.js'
    ],
    'sass':[
        'bower_components/chartist/dist/scss/chartist.scss',
        'assets/sass/*.scss'
    ],
    'jade':{
        'in':['assets/jade/*.jade'],
        'out':['build/']
    }
};

gulp.task('styles', function () {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(server.reload());
});

gulp.task('connect', function () {
    return server.server({
        root:'build',
        livereload: true

    })
});
gulp.task('scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(jsConcat('main.js'))
        .pipe(gulp.dest('build/js/'))
        .pipe(server.reload());
});
gulp.task('jade', function () {
    return gulp.src('assets/jade/*.jade')
        .pipe(jade({pretty:true}))
        .pipe(gulp.dest('build/'))
        .pipe(server.reload())
});

gulp.task('css', function () {
    return gulp.src('build/css/')
        .pipe(concat('build/dist/css/main.css'));
});

gulp.task('watch',['connect'], function () {
    gulp.watch(paths.sass, ['styles']);
    gulp.watch(paths.jade.in, ['jade']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch('*/', server.reload())
});

gulp.task('default', ['jade','styles','scripts','connect','watch']);