﻿/// <binding />

/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var iisPort = 61529;

var version = "?version=" + Date.now();
console.log(version);

/* settings for systemjs builder */

var foreach = require("gulp-foreach");
var path = require("path");

var Builder = require('systemjs-builder');
var inlineNg2Template = require('gulp-inline-ng2-template');
var appProd = './scripts';
var appDevTemp = './scripts/temp/angular2';

/* settings for HTML injection */

var fs = require("fs");
var LineByLineReader = require('line-by-line');
var gulpFile = require('gulp-file');

/* settings for minification */

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

/* settings for running build */

var runSequence = require('run-sequence');

var source = require("vinyl-source-stream");
var vinylBuffer = require("vinyl-buffer");
//
//  inject HTML templates into components
//
gulp.task("buildForProductionApp", function () {

    console.log('injectHTML started');

    var i = 0;

    return gulp.src('app/**/*.js').pipe(foreach(function (stream, file) {

        var name = file.path;
        //var fileStream = fs.readFileSync(name, "utf8");
         var fileStream = fs.readFileSync(name);

         var fileContents = fileStream.toString().split("\n");
        var rows = fileContents.length;

        var output = "";

        for (var i = 0; i < rows; i++) {

            var currentLine = fileContents[i];
            var outputLine = currentLine;

            if (currentLine.indexOf('app/') > -1) {

                if (currentLine.indexOf('templateUrl') > -1) {

                    currentLine = currentLine.replace("+ exports.debugVersion", "");

                    var start = currentLine.indexOf("app/");
                    var end = currentLine.indexOf(".html");
                    var lengthOfName = end - start;
                    var htmlFileName = "./" + currentLine.substr(start, lengthOfName) + ".html";

                    var comma = currentLine.indexOf(",");

                    try {
                       // var htmlContent = fs.readFileSync(htmlFileName, "ASCII");
                        var htmlContent = fs.readFileSync(htmlFileName, "utf8");

                        htmlContent = htmlContent.replace('/[\x00-\x1F\x80-\xFF]/', '');
                        htmlContent = htmlContent.replace("o;?", "");
                        htmlContent = htmlContent.replace(/"/g, '\\"');
                        htmlContent = htmlContent.replace(/\r\n/g, '');
                        htmlContent = "\"" + htmlContent + "\"";

                        currentLine = "template: " + htmlContent;
                        if (comma > -1) currentLine = currentLine + ",";
                        outputLine = currentLine;
                       // console.log('outputLine' + outputLine);

                    }
                    catch (err) {
                        console.log(htmlFileName + " not found.")
                    }

                }

            }
            output = output + outputLine;
        }

        streams = [];
        var stream = source("inject.js");
        var streamEnd = stream;
        stream.write(output);
        process.nextTick(function () {
            stream.end();
        });

        streamEnd = streamEnd.pipe(vinylBuffer()).pipe(concat(name)).pipe(gulp.dest("./app"));
        return stream;

    })).on('end', function () {

        console.log('stream ended');

        console.log('build For Production started.');

        var builder = new Builder('./', 'systemjs-app.config.js');
        builder.buildStatic('./app/main.js', 'scripts/angular2.min.js', { minify: true, sourceMaps: false }
        ).then(function () {
            console.log('Build static complete');
        });

        console.log('build static executing.');

    });



});


//
//  build for production
////
//gulp.task("buildForProduction", ['injectHTML'], function () {

//    console.log('build For Production started.');

//    var builder = new Builder('./', 'systemjs-app.config.js');
//    builder.buildStatic('./app/main.js', 'scripts/angular2.min.js', { minify: true, sourceMaps: false });

//    console.log('build For Production completed.');

//});

//
// the following series of tasks builds each component of angular 2 into a temp directory - for caching in development mode
//
gulp.task('@angular.js', function () {

    var SystemBuilder = require('systemjs-builder');
    var builder = new SystemBuilder('./', 'systemjs-app.config.js');
    builder.bundle('@angular/core', appDevTemp + '/core.js');
    builder.bundle('@angular/compiler', appDevTemp + '/compiler.js');
    builder.bundle('@angular/forms', appDevTemp + '/forms.js');
    builder.bundle('@angular/common', appDevTemp + '/common.js');
    builder.bundle('@angular/http', appDevTemp + '/http.js');
    builder.bundle('@angular/router', appDevTemp + '/router.js');
    builder.bundle('@angular/platform-browser', appDevTemp + '/platform-browser.js');
    builder.bundle('@angular/platform-browser-dynamic', appDevTemp + '/platform-browser-dynamic.js');
    builder.bundle('rxjs/Rx', appDevTemp + '/rxjs.js');
    return;

});
//
//  minify the development build for angular 2
//
gulp.task('buildForDevelopment', ["@angular.js"],
    function () {
        return gulp.src(appDevTemp + '/*.js').pipe(uglify()).pipe(concat('angular2-dev.min.js')).pipe(gulp.dest(appProd));
    }

);
//
//  configure browser sync
//
gulp.task('sync', function () {

    browserSync.init({
        port: iisPort + 1
    });

    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/**/*.js").on('change', browserSync.reload);
    gulp.watch("*.cshtml").on('change', browserSync.reload);

});
//
//  default task
//
//gulp.task('default', ['buildForProductionResAdmin'], function () {
// console.log('Hello');
// //gulp.task('buildForProductionResAdmin');
//});

gulp.task('default', function () {
 console.log('Hello');
 //gulp.task('buildForProductionResAdmin');
});









