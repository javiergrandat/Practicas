myApp.controller('GeolocationCtrl', GeolocationCtrl);

GeolocationCtrl.$inject = ['$scope', '$cordovaGeolocation'];

function GeolocationCtrl($scope, $cordovaGeolocation) {

    $scope.launchGeolocation=function(){
        var options = {timeout: 30000};
        $cordovaGeolocation.getCurrentPosition(options).then(function (position) {

        alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
        
        }, function(err) {
          console.log(err)
        });
    }

}