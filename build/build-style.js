'use strict'

const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

// 编译less
gulp.task('css', function () {
  gulp
    .src('../packages/theme-default/index.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions', 'ie > 8']
      })
    )
    .pipe(cleanCSS())
    .pipe(rename('hive.css'))
    .pipe(gulp.dest('../packages/theme-default/lib'))
})

// 拷贝字体文件
gulp.task('fonts', function () {
  gulp
    .src('../packages/theme-default/fonts/*.*')
    .pipe(gulp.dest('../packages/theme-default/lib/fonts'))
})

gulp.task('build', ['css', 'fonts'])

gulp.task('watch', function () {
  gulp.watch('../packages/theme-default/*.less', ['css'])
})
