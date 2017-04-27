angular.module('livro').controller('LivroCreateController',LivroCreateController);

LivroCreateController.$scope = ['$scope, LivroService']
function LivroCreateController($scope, LivroService) {
	$scope.livro = {};	
	LivroService.salvar($scope.livro);
}
