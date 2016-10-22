cordova.define("alert-plugin.Alert", function(require, exports, module) { var exec = require('cordova/exec');

var alertExport = {};

alertExport.alert = function(title, message, buttonLabel, successCallback) {
    exec(successCallback,null,"Alert","alert",[title, message, buttonLabel]);
};

module.exports = alertExport;

});
