youRadioApp.controller('ChannelCtrl',ChannelCtrl);


ChannelCtrl.$inject = ['$scope', '$state', 'channelService'];

function ChannelCtrl($scope, $state, channelService) {

  init();

  function init(){
   $scope.channels=channelService.getAll();
  }

  $scope.goToPrograms = function(channelId) {
    $state.go("programs",{"channelId":channelId})
    //alert(channelId);
  }
  
  }