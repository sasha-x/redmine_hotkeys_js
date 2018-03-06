module HotkeysPlugin
  module Hooks
    class LayoutHook < Redmine::Hook::ViewListener
	
      def view_layouts_base_html_head(context={})
        <<-TAGS
          #{stylesheet_link_tag 'hotkeys', :plugin => 'redmine_hotkeys_js'}
          #{javascript_include_tag 'hotkeys', :plugin => 'redmine_hotkeys_js'}
        TAGS
      end

    end
  end
end
