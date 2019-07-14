module.exports = function() {
	$.gulp.task("pug", () => {
		return $.gulp.src($.srcPath.pug)
		// .pipe($.changed($.distPath.pug, {extension: '.html'}))
		.pipe($.gp.pug({
			locals: JSON.parse($.fs.readFileSync('./content.json', 'utf8')), 
			pretty: true 
		}))
		.on("error", $.gp.notify.onError((err) => {
			return {
				title: "Pug",
				message: err.message
			}
		}))
		.pipe($.gulp.dest($.distPath.pug))
	});
}