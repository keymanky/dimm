	angular.module('miservicio',[])
	.factory('dimm_servicios', function ($http) {

		return{
			imprimir_fecha: function () {
				var fecha = new Date();
				return fecha;
			}
		}
	});
