var require = {
	paths : {
		bootstrap: '../../../bower_components/bootstrap/dist/js/bootstrap.min',
		bootstrapDatepicker: '../../../bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min',
		fancybox: '../../../bower_components/fancybox/source/jquery.fancybox.pack',
		fancyselect: '../../../bower_components/fancyselect/fancySelect',
		imagemapster: '../../../bower_components/imagemapster/dist/jquery.imagemapster.min',
		jquery : '../../../bower_components/jquery/dist/jquery.min',
		jqueryMask: '../../../bower_components/jQuery-Mask-Plugin/dist/jquery.mask.min',
		jqueryMigrate: '../../../bower_components/jquery-migrate/jquery-migrate.min',
		jqueryMousewheel: '../../../bower_components/jquery-mousewheel/jquery.mousewheel.min',
		arbitraryAnchor: '../../../bower_components/jquery.arbitrary-anchor/jquery.arbitrary-anchor',
		keypress: '../../../bower_components/Keypress/keypress',
		malihuCustomScrollbar: '../../../bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min',
		placeholderJS: '../../../bower_components/placeholder.js/js/jquery.placeholder',
		bootstrapSlider: '../../../bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.min',
		skrollr: '../../../bower_components/skrollr/dist/skrollr.min',
		slick: '../../../bower_components/slick.js/slick/slick.min',
		bowser: '../../../bower_components/bowser/src/bowser'
	},
	shim: {
		'isotope': {
			deps: ['jquery'],
			exports: 'jQuery.fn.isotope'
		}
	}
};
