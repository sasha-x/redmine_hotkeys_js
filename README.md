# redmine_hotkeys_js
## Redmine Hotkeys Plugin

Add some hotkeys for common actions: 

* ctrl + enter : active form submit

* project tabs switching

* issue status changes


### Project tabs switching

* ctrl + alt + n : new issue

* ctrl + alt + m : new subtask

* ctrl + alt + e : edit issue

* ctrl + alt + i: issues list

* ctrl + alt + w: wiki

* ctrl + alt + g: gantt

### Issue status changes

Based on default status list (script use ids, not names):

New : 1

In Progress : 2 (ctrl + shift + p)

Resolved : 3 (ctrl + shift + r)

Feedback : 4 (ctrl + shift + f)

Closed : 5 (ctrl + shift + c)

Where are some smart actions added for "Resolved" and "Feedback" shortcuts:

* "Resolved" status set issue assignee to its author

* "Feedback" return issue to previous assignee

To disable it simply comment out lines 84:105 of js file.

## Customize hotkeys

In file: redmine_hotkeys_js/assets/javascripts/hotkeys.js
you may edit vars: 

* commonKeys

* issueKeys

* issueStatusMap

and/or all other code you want :)

## Install 

1.git clone to ./plugins/ folder

2.customize hotkeys in file: redmine_hotkeys_js/assets/javascripts/hotkeys.js, if you want

3.restart redmine (~ apache)

## Redmine compatibility

2.5.x, 2.6.x, 3.0.0