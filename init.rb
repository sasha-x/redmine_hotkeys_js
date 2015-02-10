Redmine::Plugin.register :redmine_hotkeys_js do
  name 'Redmine Hotkeys Js plugin'
  author 'sasha-ch'
  description 'This is a plugin for Redmine which adds hotkeys for common actions.'
  version '0.0.2'
  url 'https://github.com/sasha-ch/redmine_hotkeys_js'
  author_url 'https://github.com/sasha-ch'
end

require_dependency 'hotkeys_plugin/hotkeys_hooks'
