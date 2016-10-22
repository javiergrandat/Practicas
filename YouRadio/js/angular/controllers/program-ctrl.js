/*youRadioApp.controller('ProgramCtrl', ProgramCtrl);


ProgramCtrl.$inject = ['$scope', '$stateParams', 'programService'];

function ProgramCtrl($scope, $stateParams, programService) {

  init();

  function init(){
    //alert("hola");
   $scope.programs=programService.getAll($stateParams.channelId);
  }
  
  }
*/

   youRadioApp.controller('ProgramCtrl', ProgramCtrl);


ProgramCtrl.$inject = ['$scope', '$state','$stateParams', 'programService'];

function ProgramCtrl($scope, $state, $stateParams, programService) {

  init();

  function init(){
  	alert($stateParams.channelId);
   programService.getAll($stateParams.channelId).then(function(data){
    $scope.programs=data;
   }).catch(function(error){
    console.log(error);
   });
   $scope.idChannel = $stateParams.channelId;
  }

  $scope.submit = function (program)
  {
  	$scope.programs.$add(program);
  	alert('graba');
  }

  $scope.goToMessagePrograms = function (program)
  {
  	alert(program);
  	$state.go("messageprograms", {"programId":program});
  }
  
}