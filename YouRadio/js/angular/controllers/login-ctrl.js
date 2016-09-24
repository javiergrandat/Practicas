youRadioApp.controller('LoginCtrl', ['$scope','$state','loginService',LoginCtrl]);


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

   