'use strict';

var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var nodemon = require('gulp-nodemon');
var jest = require('gulp-jest');
var runSequence = require('run-sequence');

var paths = {
    app: ['./client/app/src/app.jsx'],
    js: ['./client/app/src/**/*.*'],
};

gulp.task('browserify', function() {
    // Browserify/bundle the JS.
    console.log("browserify running");
      browserify(paths.app)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./client/app/build/'));
});


gulp.task('nodemon', function(done){
    nodemon({ script: './server/app.js', env: { 'NODE_ENV': 'development'}})
})

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.js, ['serve']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['serve']);

gulp.task('serve', function(){
    runSequence('browserify', 'nodemon', 'watch');
});

// Update Express is serving the right files
// Browserify/Reactify/Serve

gulp.task('jest', function () {
    return gulp.src('./client/app/src/').pipe(jest({
        scriptPreprocessor: "./preprocessor.js",
        unmockedModulePathPatterns: [
            "node_modules/react"
        ],
        testDirectoryName: "tests",
        testPathIgnorePatterns: [
            "node_modules",
            "spec/support"
        ],
        moduleFileExtensions: [
            "js",
            "json",
            "react"
        ]
    }));
});
