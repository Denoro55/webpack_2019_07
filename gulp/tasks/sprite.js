module.exports = function() {
	var spriteData = $.gulp.src(`${$.src}img/advantages/*.png`).pipe($.gp.spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.css'
	}));
	return spriteData.pipe($.gulp.dest(`${$.src}sprites/`));
}