angular.module("rutasdimmtv", ['ngRoute']).
	config(function ($routeProvider) {
		$routeProvider	
		.when('/', {
				templateUrl : "pages/principal.html",
				controller : 'dimmtv'
		})			
		.when('/principal', {
				templateUrl : "pages/principal.html",
				controller : 'dimmtv'
		})
		.when('/servicios',{
				templateUrl : "pages/servicios.html",
				controller : 'dimmtv'
		})
		.when('/precios', {
				templateUrl : "pages/precios.html",
				controller : 'dimmtv'
		})
		.when('/socios',{
				templateUrl : "pages/socios.html",
				controller : 'dimmtv'
		})
		.when('/clientes', {
				templateUrl : "pages/clientes.html",
				controller : 'dimmtv'
		})
		.when('/ayuda',{
				templateUrl : "pages/ayuda.html",
				controller : 'dimmtv'
		})
		.when('/acerca', {
				templateUrl : "pages/acerca.html",
				controller : 'dimmtv'
		})				
	})