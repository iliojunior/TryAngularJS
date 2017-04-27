angular.module('livro').factory('LivroService', LivroService);

function LivroService() {

  function obterTodos() {
    return this.livros;
  }

  function salvar(novoLivro) {
    this.livros.push(novoLivro);
  }

  function confirmarExclusao(index){
    this.livros.splice(index,1);
  }

  function entrarModoEdicao(index, livro){
    $location.path("livro/create/" + index)
    this.livros[index] = livro;
  }

  return {
    obterTodos : obterTodos,
    salvar : salvar,
    confirmarExclusao : confirmarExclusao,
    entrarModoEdicao: entrarModoEdicao,
    livros : [
      {titulo:'Big Java', paginas: 333},
      {titulo:'UML', paginas: 127}
    ]
  };

}
