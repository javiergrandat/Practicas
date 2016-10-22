angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Camara', id: 1 , template:'#/app/camara/'},
    { title: 'Reggae', id: 2 },
    { title: 'Chill', id: 3 },
    { title: 'Dubstep', id: 4 },
    { title: 'Indie', id: 5 },
    { title: 'Rap', id: 6 },
    { title: 'Cowbell', id: 7 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CamaraCtrl', function($scope, $stateParams) {

  $scope.scrimage='';

  $scope.takePicture=function (){
    var cameraOptions={ quality: 50, destinationType: 0};
    navigator.camera.getPicture(function(imageData) {
    $scope.scrimage="data:image/jpeg;base64," + imageData;

  }, function(err) {

    // Ruh-roh, something bad happened

  }, cameraOptions);

  }
});