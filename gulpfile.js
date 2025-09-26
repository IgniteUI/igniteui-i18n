'use strict';

const gulp = require('gulp');
const path = require('path');
const del = require('del');

exports.cleanCoreBuild = () => {
    return del.deleteAsync('dist/igniteui-i18n-core/**', {force:true});
};

exports.cleanResourcesBuild = () => {
    return del.deleteAsync('dist/igniteui-i18n-resources/**', {force:true});
};

exports.copyPackageForCore = () => {
    return gulp
        .src([path.join(__dirname, 'projects/igniteui-i18n-core/package.json')])
        .pipe(gulp.dest(path.join(__dirname, 'dist/igniteui-i18n-core')));
};

exports.copyPackageForResources = () => {
    return gulp
        .src([path.join(__dirname, 'projects/igniteui-i18n-resources/package.json')])
        .pipe(gulp.dest(path.join(__dirname, 'dist/igniteui-i18n-resources')));
};
