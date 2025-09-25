'use strict';

const gulp = require('gulp');
const path = require('path');

exports.copyPackageForCore = (cb) => {
    return gulp.src([
        path.join(__dirname, 'projects/igniteui-i18n-core/package.json')
    ]).pipe(gulp.dest(path.join(__dirname, 'dist/igniteui-i18n-core')));
};

exports.copyPackageForResources = (cb) => {
    return gulp.src([
        path.join(__dirname, 'projects/igniteui-i18n-resources/package.json')
    ]).pipe(gulp.dest(path.join(__dirname, 'dist/igniteui-i18n-resources')));
};