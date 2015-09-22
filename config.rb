###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

require 'active_support/core_ext'

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
 activate :livereload
end

# Methods defined in the helpers block are available in templates
helpers do
  def x_link_to(link_text, url, options = {})
    options[:class] ||= ""
    if url == '/' + current_page.path
      options[:class] << " current"
      '<span class="current-a">' + link_text + '</span>'
    else
      link_to(link_text, url, options)
    end
  end

  def is_current(url)
    url == current_page.path
  end
  
  def nav_link(link_text, url, options = {})
    options[:class] ||= ""
    
    if is_current(url)
      '<span class="label"><span id="current-icon">»</span>' + link_text + '</span>'
    else
      link_to(link_text, url, options)
    end
  end
  
  def list_nav_link(link_text, url, options = {})
    if is_current(url)
      '<li id="current-node" class="current-nav"><span class="label"><span id="current-icon">»</span>' + link_text + '</span></li>'
    else
      '<li>' + link_to(link_text, url, options) + '</li>'
    end
  end

  def tip(start_end = :start, css_class = '')
    if start_end == :start
      '<article class="tip ' + css_class + '">'
    elsif start_end == :end
      '</article>'
    end
  end

  def more_information(start_end = :start)
    if start_end == :start
      '<aside class="more_information"><h3>For more information</h3>'
    elsif start_end == :end
      '</aside>'
    end
  end
  
  def example(start_end = nil)
    if start_end == :end 
      '</aside>'
    elsif start_end.is_a? String
      "<aside class=\"example\"><h3>Example: <span>#{start_end}</span></h3>"
    else
      '<aside class="example"><h3>Example</h3>'
    end
  end
  
  def related_issues(*issues)
    if issues.length > 0
      issues_links = issues.collect { |issue_id|
        '<a href="https://github.com/w3c/wai-quick-start/issues/' + issue_id.to_s + '">' + issue_id.to_s + '</a>'
      }
      related_label = 'Related Issue'
      if issues.length > 1
        related_label += 's'
        issues_links[-1] = 'and ' + issues_links[-1]
      end

      '<div class="related-issue"><i class="fa fa-github"></i><strong>' + related_label + ':</strong> ' + (issues.length == 2 ? issues_links.join(' ') : issues_links.join(', ')) + '</div>'
    end
  end

  def html_example(&code)
    return unless block_given?
    
    content = capture_html(&code).encode(Encoding::UTF_8).strip_heredoc
    highlighted = Middleman::Syntax::Highlighter.highlight(content, 'html').html_safe

    concat_content <<-EOC
      <figure class="rendered">
        <figcaption><span class="info">𝒊</span> Rendered</figcaption>
        <div>
          #{content}
        </div>
      </figure>
      <figure class="code">
        <figcaption><span class="info">𝒊</span> Code Snippet</figcaption>
        <div>
          #{highlighted}
        </div>
      </figure>
    EOC
  end
  
  def javascript_example(&code)
    return unless block_given?
    
    content = capture_html(&code).encode(Encoding::UTF_8).strip_heredoc
    highlighted = Middleman::Syntax::Highlighter.highlight(content, 'javascript').html_safe

    concat_content <<-EOC
      <script type="text/javascript">
        // Note that this is not generalized code
        // and is not recommended for production use
        #{content}
      </script>
      <div class="javascript code">
        <p>Code Snippet:</p>#{highlighted}
      </div>
    EOC
  end
end

set :markdown_engine, :kramdown
activate :syntax
activate :autoprefixer, browsers: ['last 2 versions', 'ie 8', 'ie 9']

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'img'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  set :relative_links, true
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.method = :git
  # Optional Settings
  # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
  # deploy.branch   = 'custom-branch' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end
