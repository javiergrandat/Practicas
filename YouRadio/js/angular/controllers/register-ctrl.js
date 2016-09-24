youRadioApp.controller('RegisterCtrl', ['$scope','$state','loginService',RegisterCtrl]);


  function RegisterCtrl($scope, $state,loginService) {

    $scope.submit = function () {
      alert($scope.username);
      var response = loginService.register($scope.username,$scope.password,$scope.confpassword);
      if (response=="ok")
      {

        $state.go('home');  
      }
      else
      {
        alert('Los password no coinciden');
      }
    }

  }
