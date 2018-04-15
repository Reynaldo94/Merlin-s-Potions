angular.module('myApp').controller('PotionsController',function($scope,$http){

	$scope.importar = function() {

		$http.get('potions.json').success(function(dados){ //acessando os dados do arquivo Json

			$scope.pocoes=dados;


		});

	}

	$scope.importar();



});
