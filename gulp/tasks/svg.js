module.exports = function() {

	$.gulp.task('sprite:svg', () => {
	    return $.gulp.src($.srcPath.svgspr)
	    .pipe($.gp.svgmin({
	        js2svg: {
	            pretty: true
	        }
	    }))
	    .pipe($.gp.cheerio({
	        run: function($) {
	            $('[fill]').removeAttr('fill');
	            $('[stroke]').removeAttr('stroke');
	            $('[style]').removeAttr('style');
	        },
	        parserOptions: {
	            xmlMode: true
	        }
	    }))
	    .pipe($.gp.replace('&gt;', '>'))
	    .pipe($.gp.svgSprite({
	        mode: {
	            symbol: {
	                sprite: "../sprite.svg",
	                render: {
                        scss: {
                            dest: '../../../css/content/icon-generated.scss',
                            template: 'gulp/config/svg_template_sprite.scss'
                        }
                    }
	            }
	        },
	        shape: {
	            id: {
	                generator: function(name, file) {
	                    var id = name.replace(".svg", "");
	                    return id;
	                }
	            }
	        }
	    }))
	    .pipe($.gulp.dest($.distPath.svgspr))
	});

	$.gulp.task("svg:copy", () => {
		return $.gulp.src($.srcPath.svg)
		.pipe($.changed($.distPath.svg))
		.pipe($.gulp.dest($.distPath.svg))
	});

}