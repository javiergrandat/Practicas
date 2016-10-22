youRadioApp.controller('MessageprogramCtrl', MessageprogramCtrl);


MessageprogramCtrl.$inject = ['$scope','$stateParams', 'messageprogramService'];

function MessageprogramCtrl($scope, $stateParams, messageprogramService) {

  init();

  function init(){
  	alert($stateParams.programId);
   messageprogramService.getAll($stateParams.programId).then(function(data){
    $scope.messageprograms=data;
   }).catch(function(error){
    console.log(error);
   });
   //$scope.idChannel = $stateParams.channelId;
  }

  $scope.submit = function (text)
  {
    alert(text);
    //var messageprogram = {};
    //messageprogram.message = text;
    //essageprogram.username = $cookies.get("username");
  	//$scope.messageprograms.$add(messageprogram);
  	
  }
  
}