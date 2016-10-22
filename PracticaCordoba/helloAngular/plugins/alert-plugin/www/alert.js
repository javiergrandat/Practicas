var exec = require('cordova/exec');

var alertExport = {};

alertExport.alert = function(title, message, buttonLabel, successCallback) {
    exec(successCallback,null,"Alert","alert",[title, message, buttonLabel]);
};

module.exports = alertExport;
