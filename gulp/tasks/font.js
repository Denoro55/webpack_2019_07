module.exports = function() {
	$.gulp.task("font:copy", () => {
		return $.gulp.src($.srcPath.fonts)
		.pipe($.gulp.dest($.distPath.fonts))
	});
}