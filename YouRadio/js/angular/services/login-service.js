youRadioApp.factory('loginService', loginService); 

loginService.$inject = [];

function loginService() {

    var service = {
        login: loginfunc,
        register: registerfunc
    };
    return service;

    function loginfunc(username, password) {
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