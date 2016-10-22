/*youRadioApp.controller('ChannelCtrl',ChannelCtrl);


ChannelCtrl.$inject = ['$scope', '$state', 'channelService'];

function ChannelCtrl($scope, $state, channelService) {

  init();

  function init(){
   $scope.channels=channelService.getAll();
  }

  $scope.goToPrograms = function(channelId) {
    $state.go("programs",{"channelId":channelId});
    //alert(channelId);
  }
  
  }

  */

  youRadioApp.controller('ChannelCtrl', ChannelCtrl);


ChannelCtrl.$inject = ['$scope','$state', 'channelService'];

function ChannelCtrl($scope, $state, channelService) {

  init();

  function init(){
   channelService.getAll().then(function(data){
    $scope.channels=data;
   }).catch(function(error){
    console.log(error);
   });
  }

  $scope.submit = function (channel)
  {
  	$scope.channels.$add(channel);
  	alert('graba');
  }

  $scope.goToPrograms = function(channel){
  	//alert(channel);
    $state.go("programs", {"channelId":channel});
  }
  
}