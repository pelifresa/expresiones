var apliExpresiones = angular.module('ExpresionesApp',[]).controller(
	'PruebaController', function ($scope){

		$scope.mensaje="Biblioteca Nacional de la Universidad Politécnica de Toledo";
		$scope.segundoMensaje="Dpto. de Programación";
		$scope.libro={};
		$scope.libro.autor="Diego Collado";
		$scope.libro.titulo="Como programar en cualquier framework y no morir en el intento.";
		$scope.libro.tema="Programación y AutoAyuda";
		$scope.libro.isbn=Math.floor(Math.random()*5606);
	});