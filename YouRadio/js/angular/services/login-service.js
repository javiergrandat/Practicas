youRadioApp.factory('loginService', loginService); 

loginService.$inject = ['localStorageService'];

function loginService(localStorageService) {

    var service = {
        login: loginfunc,
        register: registerfunc
    };
    return service;

    function loginfunc(username, password) {
            localStorageService.set("token","MXJSJSJKSJKSJKSJKS");
            localStorageService.set("username",username);
            return "ok";
    };

    function registerfunc(username,password,confpassword){

    	if (password == confpassword){

    		return "ok";

    	}
    	else
    	{
    		return "nook";
    	}

    	}

}