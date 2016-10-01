PreguntadosApp.controller('PreguntasCtrl', PreguntasCtrl);


PreguntasCtrl.$inject = ['$scope', '$stateParams', 'preguntasService'];

function PreguntasCtrl($scope, $stateParams, preguntasService) {

  init();

  function init(){
    //alert($stateParams.Categoria);
   $scope.pregunta= preguntasService.getPregunta($stateParams.Categoria);
   //alert($scope.pregunta.respuesta1);
   $scope.opcionsel=$scope.pregunta.respuesta1;
   $scope.Categoria = $stateParams.Categoria;
  }

  $scope.submit = function () {
  		
  		if ($scope.pregunta.correcta == $scope.opcionsel)
  		{
  			alert("Respuesta correcta");
  			$scope.puntos = $scope.puntos + 20;
  		}
  	  	else
  	  	{
  	  		alert("Respuesta incorrecta");	//if (response=="ok")
  	  	}

  	  	init();
  	}
  
  }