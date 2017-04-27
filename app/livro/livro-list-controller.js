angular.module('livro').controller('LivroListController', LivroListController);

LivroListController.$scope = ['$scope','LivroService', '$stateParams'];

function LivroListController($scope, LivroService, $stateParams) {
		
  $scope.livros = LivroService.obterTodos();

  $scope.confirmarExclusao = function($index) {
    LivroService.confirmarExclusao($index);
  }

  $scope.entrarModoEdicao = function($stateParams, livro) {
  	LivroService.entrarModoEdicao($stateParams.id, livro);
  }
}
