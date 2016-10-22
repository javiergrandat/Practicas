myApp.controller('AlertCtrl', AlertCtrl);

AlertCtrl.$inject = ['$scope'];

function AlertCtrl($scope) {

    $scope.launchAlert=function(){
        Alert.alert("Title", "Message","buttonLabel", alertSuccess);

	    function alertSuccess(result) {
	         console.log(result);
	    }
    }

}