//Cerebro de angular donde controlaremos el el funcionamiento, es decir aqui ejecutarmeos las acciones importantes

angular.module('middledimmtv',['ui.bootstrap'])
.controller('dimmtv', [ '$scope', 'dimm_servicios' , function ($scope, dimm_servicios){


	$scope.myInterval = 30000;
	var slides = $scope.slides = [];
	$scope.tab_activa = 1;

	$scope.slides.push({
		image: 'imgs/principal1.jpg',
		text: 'Excelentes planes de almacenamiento web y diseño de tu pagina personal, corporativa o de comercio electrónico.',
		url: 'http://www.google.com.mx'
	});
	$scope.slides.push({
		image: 'imgs/principal2.jpg',
		text: 'Promociona tu negocio en internet mediante tu propia tienda virtual; además de tener presencia en redes sociales.',
		url: 'https://www.facebook.com/dimmTV'
	});
	$scope.slides.push({
		image: 'imgs/principal3.jpg',
		text: 'Ahorra en gastos de papelería y ayuda al medio ambiente generando menos desechos usando facturas electrónicas y otros recursos digitales.',
		url: 'https://www.flickr.com/'
	});

	$scope.activar = function (argument) {
		$scope.tab_activa= argument;
	}

}])