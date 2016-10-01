PreguntadosApp.controller('CategoriasCtrl',CategoriasCtrl);


CategoriasCtrl.$inject = ['$scope', '$state'];

function CategoriasCtrl($scope, $state) {


  $scope.goToPreguntas = function(Categoria) {
    alert(Categoria);
    $state.go("preguntas",{"Categoria":Categoria})
    
  }
  
  }