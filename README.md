Android Request Schedule Exact Alarm Plugin
========

This cordova plugin is designed to support developers who are targeting Android 14+ (API 34+), which introduced stricter rules around scheduling exact alarms and reminders.

The Android alarm scheduling mechanism changed starting in Android 14. In the past, apps were automatically granted permission to schedule exact alarms and reminders. Now this permission is denied by default and must be manually granted by users. Apps that are not meant to be calendar or alarm clock apps should explain to the user why the app wants permission to schedule exact alarms (e.g., reminders, push notifications, alarms), and then fire an action intent to bring users to the Settings screen to manually allow exact alarms. 

Older Android plugins (Android 13 and lower) do not require this new approach or request the necessary permissions.

This plugin allows you to make a request to open the **Alarms & Reminders** Setting so that users can toggle-enable the permission to "schedule exact alarms" themselves. They will then use the back arrow at the top of the page to return to your app.

Note that you will probably still need to request permission to send notifications using other plugins. See:

https://github.com/NeoLSN/cordova-plugin-android-permissions

https://github.com/fquirin/cordova-plugin-local-notifications

Installation
--------

```bash
cordova plugin add cordova-plugin-android14-schedule-exact-alarm
```

or

```bash
cordova plugin add https://github.com/xallysie/cordova-plugin-android14-schedule-exact-alarm.git
```

※ Targets Android SDK >= 14

Dependencies
--------

Requires cordova-plugin-device: https://www.npmjs.com/package/cordova-plugin-device
```bash
cordova plugin add cordova-plugin-device
```

Usage
--------

### API

```javascript
var ScheduleExactAlarm = cordova.plugins.ScheduleExactAlarm;

if (device.version >= 14){ // in your cordova app, check if participant is using android 14+
// request permission to schedule exact alarm by opening the Settings > Alarms & reminders window, so users can then toggle the permission themselves (for android 14+, api34+)
ScheduleExactAlarm.openAlarmsSetting(
  function() {
    console.log('Opened Alarms & reminders setting');
    },
  function() {
    console.log('Failed to open Alarms & reminders setting');
    },
  );
};

```

### Permission Name

Following the Android design. See [Release notes for Android 14](https://developer.android.com/about/versions/14/changes/schedule-exact-alarms).


License
--------

    Copyright (C) 2024 Sally Xie

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
