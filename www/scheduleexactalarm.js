var exec = require('cordova/exec');

var ScheduleExactAlarm = {
    openAlarmsSetting: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'ScheduleExactAlarm', 'openAlarmsSetting', []);
    }
};

module.exports = ScheduleExactAlarm;