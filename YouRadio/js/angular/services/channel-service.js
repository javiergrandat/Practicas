youRadioApp.factory('channelService', channelService); 

channelService.$inject = [];

function channelService() {

    var channels = [{'id':'1','name': 'Caracol Radio'},
     {'id':'2','name': 'Blue Radio'},
     {'id':'3','name': 'Olimpica'}];

    var service = {
        getAll: getAllFunc
    };
    return service;

    function getAllFunc() {
    return channels;
    };

}