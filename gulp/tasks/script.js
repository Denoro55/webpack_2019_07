module.exports = function() {
	$.gulp.task("js", () => {
		if ($.withWebpack) {
			return $.gulp.src($.srcPath.js)
		    .pipe($.webpackStream($.webpackConfig))
		    .pipe($.gulp.dest($.distPath.js))
		} else {
			// return $.gulp.src(`${$.src}js/**/*.js`)
			return $.gulp.src(`${$.src}js/main.js`)
			.pipe($.gp.uglify())
			// .pipe(gp.concat('bundle.min.js'))
			.pipe($.gulp.dest($.distPath.js))
		}
	});
}