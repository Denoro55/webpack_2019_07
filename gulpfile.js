'use strict';

// gulp build --env build

const proj_name = '_template' || '_template';
 
const src  = "./src/"+proj_name+"/_source/";
const dist = "./src/"+proj_name+"/_assets/";

global.$ = {
	gulp:  require('gulp'),
	gp: require("gulp-load-plugins")(),
	changed: require('gulp-changed'),
	browserSync: require('browser-sync').create(),
	fs: require('fs'),
	imagemin: require('gulp-imagemin'),
	pngquant: require('imagemin-pngquant'),
	mozjpeg: require('imagemin-mozjpeg'),
 	del: require('del'),
 	gutil: require('gulp-util'),
 	gulpif: require('gulp-if'),
	messages: require('postcss-browser-reporter'),
	syntax_scss: require('postcss-scss'),
	stylelint: require('stylelint'),
	pxtorem: require('postcss-pxtorem'),
	src: src,
	dist: dist,
	srcPath: {
		pug:     `${src}pages/*.pug`,
		// pug:     `${src}pages/maintanance.pug`,
		js:      `${src}js/main.js`,
		scss:    `${src}css/*.scss`,
		css:     `${src}css/libs/**/*.css`,
		img:     `${src}img/**/*`,
		fonts:   `${src}font/**/*.*`,
		svgspr:  `${src}svg/sprite/**/*.svg`,
		svg:     `${src}svg/**/*.svg`,
		module:  `${src}module/**/*`,
		favicon: `${src}favicon/**/*`
	},
	distPath: {
		pug:     `${dist}`,
		js:      `${dist}js/`,
		scss:    `${dist}css/`,
		css:     `${dist}css/libs/`,
		img:     `${dist}img/`,
		fonts:   `${dist}font/`,
		svgspr:  `${src}svg/sprite/`,
		svg:     `${dist}svg/`,
		module:  `${dist}module/`,
		favicon: `${dist}favicon/`
	},
	withWebpack: true,
	tasks: require('./gulp/paths')
}

$.styleConfig = require('./gulp/config/styleConfig');

$.processors = [
	$.pxtorem( {
        // rootValue: 16,
        // unitPrecision: 5,
        propList: ['*','!border-bottom'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
    } )
    // $.stylelint({
    //     reporters: [
    //         {formatter: 'string', console: true}
    //     ]
    // }),
    // $.messages({
    //     selector: 'body:before'
    // })
];

$.reload = function(done) {
	$.browserSync.reload();
	done();
}

if ($.gutil.env.env === 'build') {
    $.isProd = true;
} else {
    $.isProd = !true;
}

if ($.gutil.env.type === 'webpack') {
    $.withWebpack = true;
}

$.tasks.forEach(function(elem){
	require(elem)();
});

$.webpackStream = require('webpack-stream');
$.webpackConfig = require('./webpack.config.js');

$.gulp.task("build", $.gulp.series(
	// 'clean',
	$.gulp.parallel("pug","sass",'js'),
	$.gulp.parallel("img:copy","font:copy","svg:copy","modules:copy","favicon:copy")
));

$.gulp.task("default", $.gulp.series(
	'build',
	$.gulp.parallel("watch","serve")
));

// const nodemon = require('gulp-nodemon');
 
// gulp.task('sass:build',function() {
// 	return gulp.src(srcPath.scss)
// 	.pipe(gp.sassGlob())
// 	.pipe(gp.sass({outputStyle: 'compressed'}))
// 	.on('error',gp.notify.onError({
// 		title: "Styles Error"
// 	}))
// 	.pipe(gp.autoprefixer({
// 		browsers: [
// 		'last 15 version','>1%','ie 8','ie 9','Opera 12.1'
// 		]
// 	}))
// 	.pipe(gulp.dest(distPath.scss));
// })

// gulp.task('css',function() {
// 	return gulp.src(srcPath.css)
// 		.pipe(gulp.dest(distPath.css))
// })

// gulp.task("prod", function(){
// 	return new Promise(function(res,rej){
// 		distPath = {
// 			pug:     `${dist}`,
// 			js:      `${dist}js/`,
// 			scss:    `${dist}css/`,
// 			css:     `${dist}css/libs/`,
// 			img:     `${dist}img/`,
// 			fonts:   `${dist}font/`,
// 			svg:     `${dist}svg/`,
// 			module:  `${dist}module/`,
// 			favicon: `${dist}favicon/`
// 		}
// 		res();
// 	})
// });

// gulp.task("build", gulp.series(
// 	'clean',
// 	'prod',
// 	gulp.parallel("pug",'sass:build','font:copy','img:copy','js','svg:copy','modules:copy','favicon:copy'),
// 	'css'
// ));