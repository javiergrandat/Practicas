youRadioApp.factory('messageprogramService', messageprogramService); 

messageprogramService.$inject = ['crudfactory'];

function messageprogramService(crudfactory) {


    var service = {
        getAll:getAll
    };
    return service;

    function getAll(ProgramId) {

      alert(ProgramId);
      return crudfactory.synchronizedModel("messagesprogram",ProgramId,"messages").$load().then(completeSuccess).catch(completeFail);

      function completeSuccess(data){
       // alert(data.length());
        //var filter = data.$filterEqual("idChannel",channelId);
        //return filter;
        return data;
      }

      function completeFail(error){
      return error;
      }
      //return channels;

    };
}