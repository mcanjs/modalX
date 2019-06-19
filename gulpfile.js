const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const autoPrefixer = require('gulp-autoprefixer');

function css() {
    return src('src/sass/**/*.scss')
        .pipe(sass(''))
        .pipe(dest('dist/assets/css'))
}

function minCss() {
    return src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('dist/assets/css'))
}

function minJs() {
    return src('src/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/assets/js'))
}

function js() {
    return src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(dest('dist/assets/js'))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
exports.minify = parallel(minCss, minJs);
