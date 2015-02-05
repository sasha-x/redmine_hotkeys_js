Redmine::Plugin.register :redmine_hotkeys_js do
  name 'Redmine Hotkeys Js plugin'
  author 'sasha-ch'
  description 'This is a plugin for Redmine'
  version '2.6.0'
  url 'http://example.com/path/to/plugin'
  author_url 'http://example.com/about'
end

require_dependency 'hotkeys_plugin/hotkeys_hooks'