function launchCamera(){
    var cameraOptions={ quality: 50, destinationType: Camera.DestinationType.DATA_URL};
    navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);

    function cameraSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
    }

    function cameraError(error) {
            console.log(error);
    }
}