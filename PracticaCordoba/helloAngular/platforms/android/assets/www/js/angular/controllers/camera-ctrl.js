myApp.controller('CameraCtrl', CameraCtrl);

CameraCtrl.$inject = ['$scope', '$cordovaCamera'];

function CameraCtrl($scope, $cordovaCamera) {

  $scope.srcimage='';

    $scope.launchCamera=function(){
        var cameraOptions={ quality: 50, destinationType: Camera.DestinationType.DATA_URL};
        $cordovaCamera.getPicture(cameraOptions).then(function(imageData) {
          //var image = document.getElementById('myImage');
          $scope.srcimage = "data:image/jpeg;base64," + imageData;

        }, function(err) {
          console.log(err);
        });
    }

}