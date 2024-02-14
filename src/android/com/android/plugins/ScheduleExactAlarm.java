package com.android.plugins;

import android.os.Build;
import android.content.Intent;
import android.content.Context;
import android.net.Uri;
import android.app.AlarmManager;
import android.provider.Settings;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by Sally Xie (@xallysie) on 2024/02/14.
 */

 public class ScheduleExactAlarm extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {
        if (action.equals("openAlarmsSetting")) {
            this.openAlarmsSetting(callbackContext);
            return true;
        }
        return false;
    }

    private void openAlarmsSetting(CallbackContext callbackContext) {
        AlarmManager alarmManager = (AlarmManager) cordova.getActivity().getSystemService(Context.ALARM_SERVICE);
        if (!alarmManager.canScheduleExactAlarms()) {
            Intent intent = new Intent(Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM);
            intent.setData(Uri.parse("package:" + cordova.getActivity().getPackageName()));
            cordova.getActivity().startActivity(intent);
            callbackContext.success();
        } else {
            callbackContext.error("App already has permission to schedule exact alarms.");
        }
    }
}