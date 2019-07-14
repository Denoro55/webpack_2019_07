module.exports = function() {
	$.gulp.task("favicon:copy", () => {
		return $.gulp.src($.srcPath.favicon)
		.pipe($.gulp.dest($.distPath.favicon))
	});
}