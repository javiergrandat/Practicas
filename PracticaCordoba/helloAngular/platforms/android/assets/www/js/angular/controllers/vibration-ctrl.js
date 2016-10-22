myApp.controller('VibrationCtrl', VibrationCtrl);

VibrationCtrl.$inject = ['$scope', '$cordovaVibration'];

function VibrationCtrl($scope, $cordovaVibration) {

    $scope.launchVibration=function(){
        $cordovaVibration.vibrate(100);
    }

}