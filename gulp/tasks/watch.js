module.exports = function() {
	$.gulp.task('watch', function () {
		$.gulp.watch(`${$.src}css/**/*.scss`, $.gulp.series("sass"));
		$.gulp.watch(`${$.src}js/**/*.js*`, $.gulp.series("js"));
		$.gulp.watch(`${$.src}pages/**/*`, $.gulp.series("pug"));
		$.gulp.watch(`${$.src}img/**/*`, $.gulp.series("img:copy"));
		$.gulp.watch(`${$.src}font/**/*`, $.gulp.series("font:copy",$.reload));
		$.gulp.watch(`${$.src}svg/**/*.svg`, $.gulp.series("svg:copy",$.reload));
		$.gulp.watch(`${$.src}module/**/*`, $.gulp.series("modules:copy",$.reload));
	});
}