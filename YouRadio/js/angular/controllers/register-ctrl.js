/*youRadioApp.controller('RegisterCtrl', ['$scope','$state','loginService',RegisterCtrl]);


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

  */

  youRadioApp.controller('RegisterCtrl', RegisterCtrl);


RegisterCtrl.$inject = ['$scope', '$state', 'loginService'];

function RegisterCtrl($scope, $state, loginService) {

  getUsers();

  function getUsers() {
      $scope.users = loginService.getSynchronizedUsers(); 
  }

  $scope.newUserSubmit = function() {
    if ($scope.registerForm.$invalid) {
      return;
    }
    if ($scope.registerForm.$valid) {

      if(!angular.equals($scope.password, $scope.confpassword)){
        alert("El password no coincide");
        return;
      }

      alert($scope.username);

     //alert('es valida');
      loginService.register($scope.username, $scope.password).then(function (authData) {
          if(authData){
            if(angular.isDefined(authData.code)){
              alert(authData.message);
            }else{
               var jsonData={};
              jsonData["name"]="none";
              $scope.users.$set($scope.username,jsonData);
              alert("Perfecto ya puedes ingresar");
              $state.go('login');   
            }
            
          }
        }).catch(function (error) {
          if(error){
            alert("No fue posible el logueo");
          }
        });   
    }
  };

  
}
