'use strict';

// ------ GET DEPENDENCIES ------- //
var gulp = require('gulp'),
	pug = require('gulp-pug'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify');

// ------ HTML PRE-PROCESSOR: 'PUG' ------- //
gulp.task('pug', function () {
	return gulp.src('src/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
    		stream: true
    	}));
});

// ------ CSS PRE-PROCESSOR: 'SASS' ------- //
gulp.task('sass', function () {
  	return gulp.src('src/scss/*.scss')
    	.pipe(sass())
    	.pipe(gulp.dest('src/css'))
    	.pipe(browserSync.reload({
    		stream: true
    	}));
});

// ------ CSS CLEAN UP AND COMPRESS ------- //
gulp.task('minify-css', function () {
	return gulp.src('src/css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({
    		stream: true
    	}));
});

// ------ JS CLEAN UP AND COMPRESS ------- //
gulp.task('compress-js', function () {
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
    		stream: true
    	}));
});

// ------ BROWSER SYNC... runs a local server ------- //
gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	})
});

// ------ GULP WATCH FOR FILE CHANGES ------- //
gulp.task('watch', ['browser-sync', 'sass', 'pug', 'minify-css', 'compress-js'], function () {
	// watching for changes in these locations... if yes gulp will run these tasks
	gulp.watch(['src/*.pug'], ['pug']);
	gulp.watch(['src/scss/*.scss'], ['sass']);
	gulp.watch(['src/css/*.css'], ['minify-css']);
	gulp.watch(['src/js/*.js'], ['compress-js']);
});

// ------ TASKS TO RUN WHEN USING THE COMMAND 'gulp' IN THE TERMINAL/COMMAND LINE ------- //
gulp.task('default', ['browser-sync', 'watch']);