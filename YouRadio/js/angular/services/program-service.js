youRadioApp.factory('programService', programService); 

programService.$inject = [];

function programService() {

    var programs = [{'id':'1','name': 'El pulso del futbol','channel':'1'},
     {'id':'2','name': 'La Luciernaga','channel':'1'},
     {'id':'3','name': 'Deportes','channel':'2'},
     {'id':'3','name': 'Don Ebrio','channel':'3'}];

    var service = {
        getAll: getAllFunc
    };
    return service;

    function getAllFunc(channelId) {

        //$.grep( programs, function( n, i ) {
        //return n.channel===channelId;
        //});
        //alert(channelId);

        //JSON.parse(jsondata).filter(entry) {
        // return entry.channel === channelId;
        //};

        var programsbychannel = []

        //var data = programs.data

        for (var i=0;i<programs.length;i++) {

            if (programs[i].channel == channelId) {

                    programsbychannel.push({'id':programs[i].id,'name': programs[i].name,'channel':programs[i].channel});

            }

        }

        return programsbychannel;
        
    };

}