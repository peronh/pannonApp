var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var cleanCSS    = require('gulp-clean-css');
var del         = require('del');

var paths = {
    styles: {
        src: 'lib/**/*.css',
        dest: 'dist/styles/'
    },
    scripts: {
        src: 'lib/vendor/script/**/*.js',
        dest: 'dist/scripts/'
    },
    images: {
        src: 'assets/**/*.{jpg,jpeg,png}',
        dest: 'dist/images/'
    }
};

function clean() {
    return del([ 'dist' ]);
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

function images() {
    return gulp.src(paths.images.src, {since: gulp.lastRun(images)})
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(paths.images.dest));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.images.src, images);
}

var build = gulp.series(clean, gulp.parallel(styles, scripts, images));

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;

exports.default = build;