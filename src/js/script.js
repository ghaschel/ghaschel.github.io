define([
	'jquery'
	], function ($) {
    jQuery(document).ready(function($) {
		documentReady.init();
	});

	jQuery(window).load(function($){
		windowLoaded.init();
	});

    return {
        initialize: function () {
            console.log("Inicializado/Started/Geïnitialiseerd");
        }
    };
});

var documentReady = {
	init: function() {
		this.requires();
		this.validate();
		this.allPage();
	},
	requires: function() {
		// nothing
		// nada
		// niets
	},
	allPage: function() {
		// will run on every page
		// vai rodar em todas as páginas
		// zal draaien op elke pagina
	},
	validate: function() {
		// #me must be set on every page
		// #me deve ser setado em toda página
		// #me moet worden ingesteld op elke pagina
		switch (jQuery("#me").val()) {
			case 'home': {
				this.homeFunc();
				break;
			}
			default: {
				// none of them
				// nenhuma das opções
				// geen van hen
				break;
			}
		}
	},
	homeFunc: function() {
		// will run just on the homepage
		// vai rodar apenas na homepage
		// zal draaien alleen op de homepage
	}
};

var windowLoaded = {
	init: function() {
		this.validate();
		this.allPage();
	},
	allPage: function() {
		// will run on every page
		// vai rodar em todas as páginas
		// zal draaien op elke pagina
	},
	validate: function() {
		// #me must be set on every page
		// #me deve ser setado em toda página
		// #me moet worden ingesteld op elke pagina
		switch (jQuery("#me").val()) {
			case 'home': {
				this.homeFunc();
				break;
			}
			default: {
				// none of them
				// nenhuma das opções
				// geen van hen
				break;
			}
		}
	},
	homeFunc: function() {
		// nothing
		// nada
		// niets
	}
};

var tools = {
	listeners: {
		homeListn: function() {
			// nothing here for now
			// nada aqui por enquanto
			// hier niets van nu
		}
	},
	vendors: {
		vendorName: function(parameter) {
			// nothing here for now
			// nada aqui por enquanto
			// hier niets van nu
		}
	}
};
