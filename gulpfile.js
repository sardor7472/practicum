const   gulp        = require('gulp'),
        sass        = require('gulp-sass'),
        rename      = require('gulp-rename'),
        browsersync = require('browser-sync').create(),
        cleanCSS    = require('gulp-clean-css'),
        notify      = require("gulp-notify"),
        sourceMap = require('gulp-sourcemaps');


function Sass () {
    return gulp.src('./app/assets/scss/**/*.scss')
        .pipe(sourceMap.init())
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourceMap.write())
        // .pipe(cleanCSS())
        .pipe(gulp.dest('./app/assets/css'))
        .pipe(browsersync.reload({
            stream: true
        }))
}
function browserSync (done) {
    browsersync.init({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
    done()
}

function watchFiles () {
    gulp.watch("./app/assets/scss/**/*", Sass);
    gulp.watch('./app/**/*.html', browserSyncReload);
    gulp.watch('./app/*.html', browserSyncReload);
    gulp.watch('./app/assets/js/*.js', browserSyncReload);
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

const watch = gulp.parallel(watchFiles, browserSync, Sass);

exports.default = watch;
