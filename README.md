# WAI Getting Started Tips

This is the repository for the [WAI Getting Started Tips](//w3.org/WAI/gettginstarted/tips/) resource. Developed by the
[Education and Outreach Working Group (EOWG)](//w3.org/WAI/EO/) with support from the [WAI-DEV project](//w3.org/WAI/DEV/), co-funded by the European Commission <abbr title="Information Society Technologies">IST</abbr> Programme. 

You can find the current draft state of the document on [this Github Pages site][GHPage]

## Contributing

The main content pages of this resource are written in Kramdown, a version of Markdown. The [Quick Reference](http://kramdown.gettalong.org/quickref.html) provides details on how to write content.

Editing a page on GitHub works just like a Wiki.

Either browse to the page in this repository and edit the file there, or visit the page in [Github Page][GHPage] and click on "Fork and Edit" at the bottom of the page.

You can start editing right away. If you get the following note, this is expected behavior:

> You are editing a file in a project you do not have write access to. We are forking this project for you (if one does not yet exist) to write your proposed changes to. Submitting a change to this file will write it to a new branch in your fork so you can send a pull request.

It is technical for “All right, make your edits, we make sure you can send them in as a proposal!”

Don’t forget to add some descriptive text at the bottom that comments your change. Try to be concise. Click the “Propose this change” button to continue. Then you get another comment field, you can write down your motivation for the change here. Once you click “Send pull request” the editor of the notified of your proposal and may adopt it.

### Helpers

The resource also provides some additional convenience helpers that are used to structure the code. These are included in the page using the following code:

```
{::nomarkdown}
<%= tip %>
{:/}
```

The following elements are available:

<dl>
  <dt>tip</dt>
    <dd>Starts a tip block within a page. To end the block use <code><%= tip :end %></code></dd>

  <dt>more_information</dt>
    <dd>Starts the block for adding additional resources that add more information to this resource. To end the block use <code><%= more_information :end %></code></dd>

  <dt>example</dt>
    <dd>Starts an example block for a tip. To end the block use <code><%= example :end %></code></dd>

  <dt>html_example</dt>
    <dd>This helper outputs a segment of formated HTML as part of an example. It is used as:</dd>
    <dd><pre><code>{::nomarkdown}
  <% html_example do %>
    &lt;label for="username"&gt;Username&lt;/label&gt;
    &lt;input id="username" type="text" name="username"&gt;
  <% end %>
{:/}</code></pre></dd>

  <dt>w3url</dt>
    <dd>Creates a link to a W3C page so that when this resource is hosted on GitHub Pages, the links work as expected, but when it is deployed into w3.org, the links are all relative. Use this in combination with the <code>link_to</code> helper:</dd>
    <dd><code><%= link_to "WAI Homepage", (w3url '/WAI/') %></code></dd>
</dl>

## Structure

This resource is built using [Middleman](//middlemanapp.com/), a static site generation tool. To build a local version of the resource do the following:

* [Install Middleman](//middlemanapp.com/basics/install/)
* Clone a version of this repository
* Install the repository dependencies, `bundle install` in the repository root directory
* Run the server, `middleman server`

This resource uses GitHub Pages to display the current draft version. If you wish to update this version from your cloned repository you need to:

* Build a GitHub version of the resource

  `BUILD_FOR_GITHUB=1 middleman build`

* Deploy the built version

  `middleman deploy`
  
The environment variable, `BUILD_FOR_GITHUB`, is used to configure URLs. So when the resource is deployed on GitHub Pages the URLs are absolute, and when built for production deployment in w3.org they are relative.

## Deploying to live

The following steps are required in order to deploy this to the live w3.org environment. In order to deploy you will need the permissions to update content on w3.org.

1. Build deployable version.

    `middleman build`

    This builds the content into the local `build` directory. Removing the `BUILD_FOR_GITHUB` means that the URLs in the pages built will be relative rather than absolute.

2. CVS update the `/WAI/gettingstarted`, `/WAI/users`, `/WAI/intro`, and `/WAI/bcase` directories in your local version of the repository.

3. Until the Evaluating, Managing, and Advocating are ready for publication, reference to them will need to be removed. Edit the following files and remove links to these pages from the navigation:

    * build/index.html
    * build/designing.html
    * build/developing.html
    * build/writing.html

4. Copy the following from the `build` directory to the local CVS `impl` directory:

    * index.html
    * acknowledgements.html
    * designing.html
    * developing.html
    * writing.html
    * images/*
    * stylesheets/*
    * javascripts/*

5. If necessary, edit the Getting Started overview and make changes to the `/WAI/gettingstarted/Overview.html` page.

6. If necessary, edit the following pages and update the navigation to change the label and URL for this resource:

    * /WAI/gettingstarted/Overview.html
    * /WAI/users/browsing.html
    * /WAI/users/inaccessible.html
    * /WAI/intro/accessibility.php
    * /WAI/intro/components.php
    * /WAI/bcase/Overview.html

7. Commit all the changes to the w3.org CVS repository.

8. Check all the pages to find the typo that you accidentally left in.

[GHPage]: https://w3c.github.io/wai-quick-start/