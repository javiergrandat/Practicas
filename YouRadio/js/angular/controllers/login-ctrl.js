/*youRadioApp.controller('LoginCtrl', ['$scope','$state','loginService',LoginCtrl]);


  function LoginCtrl($scope, $state,loginService) {

  	$scope.submit = function () {
  		alert($scope.username);
  		var response = loginService.login($scope.username,$scope.password);
  		if (response=="ok")
  		{

  			$state.go('home');	
  		}
  	}

  }

   */

   youRadioApp.controller('LoginCtrl', LoginCtrl);


LoginCtrl.$inject = ['$scope', '$cookies', '$state', 'loginService'];

function LoginCtrl($scope, $cookies, $state, loginService) {

  getUsers();

  function getUsers() {
      $scope.users = loginService.getSynchronizedUsers(); 
  }


  $scope.submit = function() {
    if ($scope.userForm.$invalid) {
      return;
    }
    if ($scope.userForm.$valid) {
     //alert('es valida');
      loginService.login($scope.username, $scope.password).then(function (authData) {
          if(authData){
            if(angular.isDefined(authData.code)){
              alert(authData.message);
            }else{
              //alert("Perfecto");
              $cookies.put("username",$scope.username);
              $state.go('channels');
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