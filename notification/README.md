Notification DropDown
=================

Notification Dropdown is a jQuery Plugin that allows for stick notifications appear at the top of the page when needed. 
There are a total of 4 types of notification available: `default`, `warning`, `error`, and `success`.

Basic Setup
-----------------
Setting up Notification Dropdown is simple - just include jQuery and the plugin as shown below:
 ```html
<script src="path_to_jQuery/jQuery.js" type="text/javascript"></script>
<script src="path_to_plugin/notification.js" type="text/javascript"></script>
 ```

Usage
---------
Usage of the plugin is very simple - just call the plugin like this:
```javascript
$.notification(text , type);
```
Where `text` is the message you want to display and `type` is one of the four types listed above.

For example,
```javascript
$.notification("Hello World!");
```
would result in:
  
![alt text](https://raw.github.com/kpsuperplane/plugin-collection/master/notification/screenshots/default.PNG "Hello World!")
  
Note that if `type` isn't given it will default to `default` type.

Multiple Notifications
-----------------------------
Notification Dropdown supports multiple notifications - just keep calling the plugin and it will automatically add new ones ontop of the old ones. As demonstrated in the screenshot, there's a little `1` at the front of the notification - which denotes that there is currently only 1 notification, which is the one that is being shown.  If there were more, that number would slowly count up consecutively. 

Screenshots
-----------------
![alt text](https://raw.github.com/kpsuperplane/plugin-collection/master/notification/screenshots/default2.png "Default type")
```javascript
$.notification("Default");
```
  
![alt text](https://raw.github.com/kpsuperplane/plugin-collection/master/notification/screenshots/error.png "Error - uh oh!")
```javascript
$.notification("Error","error");
```
  
![alt text](https://raw.github.com/kpsuperplane/plugin-collection/master/notification/screenshots/success.png "Success! Yay!")
```javascript
$.notification("Success","success");
```
  
![alt text](https://raw.github.com/kpsuperplane/plugin-collection/master/notification/screenshots/warning.png "Warning - better watch out")
```javascript
$.notification("Warning","warning");
```

License
-----------
This plugin is licensed under the MIT license.
```
Copyright (c) 1998 Kevin Pei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```