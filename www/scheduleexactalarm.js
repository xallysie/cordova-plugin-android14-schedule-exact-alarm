var exec = require('cordova/exec');

var ScheduleExactAlarm = {
    checkPermission: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'ScheduleExactAlarm', 'checkPermission', []);
    },
    requestPermission: function(successCallback, errorCallback) {
        if (typeof successCallback === "function") {
            var temp = successCallback;
            successCallback = errorCallback;
            errorCallback = temp;
        }
        exec(successCallback, errorCallback, 'ScheduleExactAlarm', 'requestPermission', []);
    },
    requestPermissions: function(permissions, successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'ScheduleExactAlarm', 'requestPermissions', [permissions]);
    }
};

module.exports = ScheduleExactAlarm;
