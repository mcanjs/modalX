const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const rename = require('gulp-rename')

function css() {
    return src('src/sass/**/*.scss')
        .pipe(sass(''))
        .pipe(dest('dist/assets/css'))
}

function minCss() {
    return src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('dist/assets/css'))
}

function js() {
    return src('src/js/*.js', { sourcemaps: true })
        .pipe(concat('script.min.js'))
        .pipe(dest('dist/assets/js', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
exports.minify = parallel(minCss, js);
