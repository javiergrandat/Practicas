/*youRadioApp.controller('HomeCtrl', HomeCtrl);


  HomeCtrl.$inject = ['$scope'];

  function HomeCtrl($scope) {

  	/*$scope.submit = function () {
  		if (($scope.username == 'jgrandat') && ($scope.password == '123')	) {
  			alert('submit');
  		alert($scope.username);
  		alert($scope.password);
  		}
  		else
  		{

  			alert('Falla');
  		}
  		
      alert('entre');

  	}

    */

    youRadioApp.controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$state', 'loginService'];

function HomeCtrl($scope, $state, loginService) {

  $scope.c = function(){
    //alert('Hola');
    $state.go('register');
  }

  $scope.goToLogin = function(){
    //alert('Hola');
    $state.go('login');
  }

  $scope.loginfacebook = function(){
    loginService.loginfacebook().then(function (authData) {
          if(authData){
            if(angular.isDefined(authData.code)){
              alert(authData.message);
            }else{
              alert("Perfecto");
              $state.go('channels');   
            }
            
          }
        }).catch(function (error) {
          if(error){
            alert("No fue posible el logueo");
          }
        });   
    
  }

}
