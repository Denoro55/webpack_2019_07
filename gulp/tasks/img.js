module.exports = function() {
	$.gulp.task('img:copy', () => {
	    return $.gulp.src($.srcPath.img)
	    .pipe($.changed($.distPath.img))
	    .pipe($.imagemin([
	        $.pngquant(),
	        $.mozjpeg({
	            progressive: true
	        })
	    ],{
	        verbose: true
	    }))
	    .pipe($.gulp.dest($.distPath.img))
	});
}