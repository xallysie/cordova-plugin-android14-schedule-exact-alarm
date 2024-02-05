Android Request Schedule Exact Alarm Plugin
========

This cordova plugin is designed to support developers who are targeting Android 14+ (API 34+), which introduced stricter rules around scheduling exact alarms and reminders.

The Android alarm scheduling mechanism changed starting in Android 14. In the past, apps were automatically granted permission to schedule exact alarms and reminders. Now this permission must be manually granted by users 

Now the permissions are denied by default. Apps that are not meant to be calendar or alarm clock apps should explain to the user why the app wants permission to schedule exact alarms (e.g., reminders, push notifications, alarms), and then fire an action intent to bring users to the Settings screen to manually allow exact alarms. 

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

ScheduleExactAlarm.checkScheduleExactAlarmPermission(successCallback, errorCallback);
ScheduleExactAlarm.requestScheduleExactAlarmPermission(successCallback, errorCallback); // deprecated; android documentation recommends requesting permissions through the launchRequest method below. this works but will not be supported in the future
ScheduleExactAlarm.launchRequestScheduleExactAlarmIntent(successCallback, errorCallback)

```

### Permission Name

Following the Android design. See [Release notes for Android 14](https://developer.android.com/about/versions/14/changes/schedule-exact-alarms).
```javascript
// Example
ScheduleExactAlarm.ACTION_REQUEST_SCHEDULE_EXACT_ALARM;
ScheduleExactAlarm.SCHEDULE_EXACT_ALARM;

```

## Examples
```js
var ScheduleExactAlarm = cordova.plugins.ScheduleExactAlarm;
```

#### Quick check
```js

function errorCallback() {
  console.warn('You have not granted this app permission to schedule exact alarms. Please navigate to Settings > App Info and allow scheduling of exact alarms for this app.');
  };
function successCallback( status ) {
  if( !status.hasPermission ) permerrorCallback();
  };
ScheduleExactAlarm.checkScheduleExactAlarmPermission(successCallback, errorCallback);

```
#### Quick request
```js
ScheduleExactAlarm.launchRequestScheduleExactAlarmIntent(successCallback, errorCallback);

function errorCallback() {
  console.warn('Request to schedule exact alarms and reminders NOT granted.');
}

function successCallback( status ) {
  if( !status.hasPermission ) error();
}
```

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
