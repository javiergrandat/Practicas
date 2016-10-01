youRadioApp.controller('ProgramCtrl', ProgramCtrl);


ProgramCtrl.$inject = ['$scope', '$stateParams', 'programService'];

function ProgramCtrl($scope, $stateParams, programService) {

  init();

  function init(){
    //alert("hola");
   $scope.programs=programService.getAll($stateParams.channelId);
  }
  
  }