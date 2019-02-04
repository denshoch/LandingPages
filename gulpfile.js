var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var scss = require('gulp-sass');
var rename = require("gulp-rename");
var jade = require('gulp-jade');

// Bower
var config = {
    bowerDir: './bower_components',
    versions: {
      narrative: "1.1"
    }
};

gulp.task('base', function () {
    return gulp.src('css/styles.scss')
        .pipe(sass({
          //sourcemap: true,
          sourcemapPath: '../css',
          loadPath: [
            config.bowerDir + '/bootstrap-sass-official/assets/stylesheets'
          ]
        }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('css'));
});

gulp.task('sass', function () {
    gulp.src('narrative/' + config.versions.narrative + '/css/styles.scss')
        .pipe(scss({outputStyle: 'expanded'}))
        .pipe(gulp.dest('narrative/' + config.versions.narrative + '/css'));
});


gulp.task('narrative', function () {
    gulp.src('narrative/' + config.versions.narrative + '/css/styles.scss')
        .pipe(sass({
          //sourcemap: true,
          sourcemapPath: '../css',
          loadPath: [
            config.bowerDir + '/bootstrap-sass-official/assets/stylesheets'
          ]
        }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('narrative/' + config.versions.narrative + '/css'));
    gulp.src('narrative/' + config.versions.narrative + '/jade/*.jade')
        .pipe(jade({
          pretty: true,
        }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(rename({
          extname: ".txt"
        }))
        .pipe(gulp.dest("./narrative"));
});

gulp.task('default', ['base']);
