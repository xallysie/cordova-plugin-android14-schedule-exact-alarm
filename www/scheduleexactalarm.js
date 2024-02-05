var exec = require('cordova/exec');

exports.requestPermission = function(success, error) {
    exec(success, error, 'ScheduleExactAlarm', 'requestPermission', []);
};
