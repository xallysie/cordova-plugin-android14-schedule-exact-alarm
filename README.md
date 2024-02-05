Android Request Schedule Exact Alarm Plugin
========

This cordova plugin is designed to support developers who are targeting Android 14+ (API 34+), which introduced stricter rules around scheduling exact alarms and reminders.

The Android alarm scheduling mechanism changed starting in Android 14. In the past, apps were automatically granted permission to schedule exact alarms and reminders. Now this permission must be manually granted by users 

In Android 14, the permissions are denied by default. Apps that are not meant to be calendar or alarm clock apps should explain to the user why the app wants permission to schedule exact alarms (e.g., reminders, push notifications, alarms), and then fire an action intent to bring users to the Settings screen to manually allow exact alarms. 

Older Android plugins (Android 13 and lower) do not require this new approach or request the necessary permissions.

Installation
--------

```bash
cordova plugin add cordova-plugin-android-permissions
```

or

```bash
cordova plugin add https://github.com/xallysie/cordova-plugin-android14-schedule-exact-alarm.git
```

※ Support Android SDK >= 14

Usage
--------

### API

```javascript
var ScheduleExactAlarm = cordova.plugins.ScheduleExactAlarm;

// request permission to schedule exact alarm using the cordova notification permission request module for android 14+, api34+
ScheduleExactAlarm.requestPermission(
  function() {
    console.log('Schedule_Exact_Alarm Permission request successful');
    },
  function() {
    console.log('Schedule_Exact_Alarm Permission request failed');
    }
  );

```

### Permission Name

Following the Android design. See [Release notes for Android 14](https://developer.android.com/about/versions/14/changes/schedule-exact-alarms).


License
--------

    Copyright (C) 2023 Sally Xie

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.