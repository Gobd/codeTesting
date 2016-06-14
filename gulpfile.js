/* jshint node: true */

const
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    mainBowerFiles = require('main-bower-files'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    order = require("gulp-order"),
    print = require('gulp-print'),
    htmlmin = require('gulp-htmlmin')
browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    flatten = require('gulp-flatten'),
    processors = [autoprefixer()];

gulp.task('server', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('css', function() {
    return gulp.src(mainBowerFiles('**/*.css').concat(['./src/**/*.css']))
        // .pipe(order([
        //   '**/normalize.css', '**/.css'
        // ]))
        .pipe(sourcemaps.init())
        // .pipe(cleanCSS())
        .pipe(postcss(processors))
        .pipe(concat('css.min.css'))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({
            stream: true,
            match: '**/*.css'
        }));
});


gulp.task('js', function() {
    return gulp.src(mainBowerFiles('**/*.js').concat(['./src/**/*.js', '!./src/worker-javascript.js']))
    .pipe(print())
        // .pipe(order([
        //     "**/jquery3rc1.js", "**/app.js", "**/*.js"
        // ]))
        .pipe(flatten())
        .pipe(sourcemaps.init())
        // .pipe(uglify())
        .pipe(concat('js.min.js'))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('./dist/js'))
        .on('end', reload);
});

gulp.task('work', function() {
    return gulp.src('./src/worker-javascript.js')
        // .pipe(flatten())
        // .pipe(sourcemaps.init())
        // .pipe(uglify())
        // .pipe(concat('worker-javascript.js'))
        // .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('./dist/js'))
        .on('end', reload);
});

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
        .pipe(flatten())
        // .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true}))
        .pipe(gulp.dest('./dist'))
        .on('end', reload);
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.css', ['css']);
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/**/*.html', ['html']);
});

gulp.task('default', ['css', 'js', 'watch', 'server', 'html', 'work']);