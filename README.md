Горячие клавищи redmine
=======================

Обновлены под Redmine 3.4.  
Некоторые - переназначены ("ctrl + shift + p" в новой версии Firefox занят).

Общие
-----

-   ctrl + enter : отправка формы создать/обновить
-   ctrl + alt + l : раскрыть меню переключения проектов
-   ctrl + alt + m : моя страница

По разделам проекта
-------------------
    
-    ctrl + alt + n : новая задача
-    ctrl + alt + s : новая подзадача
-    ctrl + alt + e : редактировать задачу
-    ctrl + alt + i : список задач
-    ctrl + alt + w : wiki
-    ctrl + alt + g : gantt

Обновление статусов задач
-------------------------
    
-    ctrl + alt + p : в работе
-    ctrl + alt + r : решена + перевод на автора
-    ctrl + alt + f : требуется информация + перевод на пpедидущего исполнителя
-    ctrl + alt + c : закрыта

По списку задач
---------------

- перемещение: стрелки вверх-вниз
- выделить: пробел
- открыть: Enter
- групповое обновление: по меню правой кнопки

Примечания
----------

- клавищи работают в любой раскладке клавиатуры (рус/англ)
- есть краткая форма горячих клавиш (просто n, i, p), если фокус/курсор не на элементах ввода 


# redmine_hotkeys_js (In English)

*UPD* : this version is for RM v. >=3.4.  
Partially incompartible with older versions.

## Redmine Hotkeys Plugin

Add some hotkeys for common actions: 

* ctrl + enter : active form submit (issue, wiki, etc.)
* project tabs switching (ctrl + alt + "first letter of tab name")
* issue status changes (ctrl + alt + "first letter of standard status name")
* navigation on issues list (arrow up/down, space, enter) 

Tips:

* hotkeys works regardless active keyboard layout/lang
* short form of hotkeys available (l, i, e, n, ...). No "ctrl + alt" need if cursor is free (focus is not inside some input element)

### Navigation on issues list

* "ArrowDown", "ArrowUp" to focus  issue
* "Space" (or Shift+Up/Down) to select (check/uncheck) issue
* "Enter" to open issue

~~Make as in mail.yandex.ru.~~ 

### Project list

* ctrl + alt + l: project list select open

### Project tabs switching

* ctrl + alt + n : new issue
* ctrl + alt + m : new subtask
* ctrl + alt + e : edit issue
* ctrl + alt + i: issues list
* ctrl + alt + w: wiki
* ctrl + alt + g: gantt

### Issue status changes

Based on default status list (script use <id>s, not names):

* New : 1
* In Progress : 2 (ctrl + alt + p)
* Resolved : 3 (ctrl + alt + r)
* Feedback : 4 (ctrl + alt + f)
* Closed : 5 (ctrl + alt + c)

#### Where are some smart actions added for "Resolved" and "Feedback" shortcuts:

* "Resolved" status set issue assignee to its author
* "Feedback" return issue to previous assignee

Tips:
* It works ok if you have a proper access rights
* To disable it simply comment out lines ... of js file.

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

See http://www.redmine.org/projects/redmine/wiki/Plugins

1. git clone to ./plugins/ folder
 - find redmine installation dir (`find / -name redmine -type d`)
 - cd to plugins (may be `<installation dir>/apps/redmine/htdocs/plugins/`)
 - sudo, if need
 - `git clone https://github.com/sasha-ch/redmine_hotkeys_js.git`
2. customize hotkeys in file: redmine_hotkeys_js/assets/javascripts/hotkeys.js, if you want
3. restart redmine or apache. Way depends on your RM installation. May be one of:
 - `bundle exec rake redmine:plugins:migrate RAILS_ENV=production`
 - `user@redmine:<htdocs dir># echo 'restart' > tmp/restart.txt` and F5 redmine page
 - `sudo apache2ctl restart`, `sudo service httpd restart`, `sudo service bitnami restart`

## Redmine compatibility

2.5, 2.6, 3.0, 3.4

Теsted on default skin. Opera 12, FF 35-58
