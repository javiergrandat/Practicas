youRadioApp.factory('contactService', contactService); 

contactService.$inject = [];

function contactService() {

    var contacts = [];

    var service = {
        getAll: getAllFunc,
        add: addFunc,
        remove: removeFunc
    };
    return service;

    function getAllFunc() {
    return contacts;
    };

    function addFunc(contact){

    	contacts.push(contact);
    }

    function removeFunc(contact)
    {

        var index = contacts.indexOf(contact);
        if (index > -1) {

            contacts.splice(index, 1);
        }

    }

}