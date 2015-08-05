# redmine_hotkeys_js
## Redmine Hotkeys Plugin

Add some hotkeys for common actions: 

* ctrl + enter : active form submit
* project tabs switching
* issue status changes
* navigation on issues list (yandex mail - like)

### Navigation on issues list

* "ArrowDown", "ArrowUp" to focus  issue
* "Space" (or Shift+Up/Down) to select (check/uncheck) issue
* "Enter" to open issue

Make as in mail.yandex.ru. Tested on RM 2.6; FF, Opera, IE8.

### Project list

* ctrl + alt + p: project list select open

### Project tabs switching

* ctrl + alt + n : new issue
* ctrl + alt + m : new subtask
* ctrl + alt + e : edit issue
* ctrl + alt + i: issues list
* ctrl + alt + w: wiki
* ctrl + alt + g: gantt

### Issue status changes

Based on default status list (script use ids, not names):

* New : 1
* In Progress : 2 (ctrl + shift + p)
* Resolved : 3 (ctrl + shift + r)
* Feedback : 4 (ctrl + shift + f)
* Closed : 5 (ctrl + shift + c)

#### Where are some smart actions added for "Resolved" and "Feedback" shortcuts:

* "Resolved" status set issue assignee to its author
* "Feedback" return issue to previous assignee

To disable it simply comment out lines 84:105 of js file.

## Customize hotkeys

In file: redmine_hotkeys_js/assets/javascripts/hotkeys.js
you may edit vars: 

* commonKeys
* issueKeys
* issueStatusMap

## TODO

* hotkeys customize from "settings" page
* hotkeys help window
* Edit issue watchers
* Prev/next issue navigation (?)
* hide/show right side page bar
* context menu keyboard nav (?)
* some ajax functions
* * change issue status/assignee on a fly (?)

## Install 

1. git clone to ./plugins/ folder
2. customize hotkeys in file: redmine_hotkeys_js/assets/javascripts/hotkeys.js, if you want
3. restart redmine (~ apache)

## Redmine compatibility

2.5.x, 2.6.x, 3.0.0

Теsted on default skin. Opera 12.x, FF 35.x
