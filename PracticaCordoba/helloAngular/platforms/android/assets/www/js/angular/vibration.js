app.onDeviceReady: function() {
    console.log(navigator.vibrate);
}

function launchVibration(){
    navigator.vibrate(3000);
}