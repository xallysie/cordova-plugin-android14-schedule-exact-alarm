package com.android.plugins;

import android.app.Activity;
import android.app.AlarmManager;
import android.provider.Setings;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;
import android.Manifest;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by Sally Xie (@xallysie) on 2023/09/14.
 */

public class ScheduleExactAlarm extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {

        if (action.equals("requestPermission")) {
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.S) {
                AlarmManager alarmManager = (AlarmManager) cordova.getActivity().getSystemService(Context.ALARM_SERVICE);
                if (!alarmManager.canScheduleExactAlarms()) {
                    Intent intent = new Intent(Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM);
                    intent.setData(Uri.parse("package:" + cordova.getActivity().getPackageName()));
                    cordova.getActivity().startActivity(intent);
                    callbackContext.success();
                    return true;
                }
            }
            callbackContext.error("Permission already granted or not needed.");
            return false;
        }
        return false;
    }
}
