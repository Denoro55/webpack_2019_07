module.exports = function() {
	$.gulp.task('sass',function() {
		return $.gulp.src($.srcPath.scss)
		.pipe($.gulpif(!$.isProd, $.gp.sourcemaps.init()))
		.pipe($.gp.sassGlob())
		.pipe($.gp.sass($.styleConfig.sass))
		.pipe($.gp.postcss($.processors, {syntax: $.syntax_scss}))
		// .pipe($.gp.csso())
		.on('error',$.gp.notify.onError({
			title: "Styles Error"
		}))
		.pipe($.gp.autoprefixer())
		.pipe($.gulpif(!$.isProd, $.gp.sourcemaps.write()))
		.pipe($.gulp.dest($.distPath.scss))
		.pipe($.browserSync.reload({stream: true}))
	})
}