//Cerebro de angular donde controlaremos el el funcionamiento, es decir aqui ejecutarmeos las acciones importantes

angular.module('middledimmtv',['ui.bootstrap'])
.controller('dimmtv', [ '$scope', 'dimm_servicios' , function ($scope, dimm_servicios){


	$scope.myInterval = 3000;
	var slides = $scope.slides = [];
	$scope.tab_activa = "";

	$scope.slides.push({
		image: 'imgs/principal1.jpg',
		text: 'Vea la demostración de nuestros proyectos.',
		url: 'http://www.google.com.mx'
	});
	$scope.slides.push({
		image: 'imgs/principal2.jpg',
		text: 'Conozca quienes somos, a los que nos dedicamos y como integramos las tecnologias en su negocio.',
		url: 'https://www.facebook.com/dimmTV'
	});
	$scope.slides.push({
		image: 'imgs/principal3.jpg',
		text: 'Vea el porque es importante mejorar sus procesos y reducir costos con estas tecnologias.',
		url: 'https://www.flickr.com/'
	});

	$scope.activar = function (argument) {
		$scope.tab_activa= argument;
	}

}])