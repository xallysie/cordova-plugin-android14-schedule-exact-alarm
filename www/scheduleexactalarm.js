<<<<<<< HEAD
=======
var exec = require('cordova/exec');

>>>>>>> 9d3cf143e6a648fa70939a4d046396fa4af51035
var permissionsName = 'ScheduleExactAlarm';

function ScheduleExactAlarm() {
    this.SCHEDULE_EXACT_ALARM = 'android.permission.SCHEDULE_EXACT_ALARM';
    this.ACTION_REQUEST_SCHEDULE_EXACT_ALARM = 'android.intent.action.REQUEST_SCHEDULE_EXACT_ALARM';
   //...// }
};

function deprecated(name) {
  console.warn("Calling cordova.plugins.permissions." + name + " with the successCallback as first argument is deprecated");
  console.warn("The new signature is '" + name + "(permission, successCallback, errorCallback)'");
};

ScheduleExactAlarm.prototype = {
    checkPermission: function(permission, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, permissionsName, 'checkPermission', [permission]);
    },
    requestPermission: function(permission, successCallback, errorCallback) {
        if (typeof permission === "function") {
            deprecated("requestPermission");
            successCallback = arguments[0];
            errorCallback = arguments[1];
            permission = arguments[2];
        }
        cordova.exec(successCallback, errorCallback, permissionsName, 'requestPermission', [permission]);
    },
    requestPermissions: function(permissions, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, permissionsName, 'requestPermissions', permissions);
    },

    // New methods for checking and requesting SCHEDULE_EXACT_ALARM permissions
    checkScheduleExactAlarmPermission: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, permissionsName, 'checkPermission', [this.SCHEDULE_EXACT_ALARM]); 
    },
    requestScheduleExactAlarmPermission: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, permissionsName, 'requestPermission', [this.SCHEDULE_EXACT_ALARM]);
    },
    launchRequestScheduleExactAlarmIntent: function(successCallback, errorCallback) {
        // Open system settings for SCHEDULE_EXACT_ALARM permission
        cordova.exec(successCallback, errorCallback, permissionsName, 'launchRequestScheduleExactAlarmIntent', [this.ACTION_REQUEST_SCHEDULE_EXACT_ALARM]);
    },
};

ScheduleExactAlarm.prototype.hasPermission = function (permission, successCallback, errorCallback) {
    console.warn("hasPermission() function deprecated. Considers using checkPermission()");

    if (typeof permission === "function") {
        deprecated("hasPermission");
        successCallback = arguments[0];
        errorCallback = arguments[1];
        permission = arguments[2];
    }
    this.checkPermission.call(this, permission, successCallback, errorCallback);
};

module.exports = new ScheduleExactAlarm();
