module.exports = function() {
	$.gulp.task("modules:copy", () => {
		return $.gulp.src($.srcPath.module)
		.pipe($.gulp.dest($.distPath.module))
	});
}