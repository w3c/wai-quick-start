---
title: "Quick start tips for accessible coding"
status: editors-draft
layout: guide
---

These are introductory tips to help you start with accessibility. While not an exhaustive list of requirements, they cover important points that will help you incorporate accessibility into your website development.

{:.toc .no_toc}
## On this page

{:toc .toc}
* Will be replaced with the ToC

{:.attach_permalink}
## Use mark-up to convey meaning

HTML5 provides many elements that signify meaning, such as `<h1>`, `<nav>`, `<aside>`, which can be interpreted and communicated by assistive technologies. Use these elements to help structure content and convey meaning that is visually apparent. ARIA roles can be used to provide additional meaning to page elements, for example, using `role='search'` to identify search functionality. Work with designers and content authors to ensure the given meaning is agreed and consistently used.

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of markup along side a visual design ...]

{::nomarkdown}
<%= example_end %>
{:/}


{:.attach_permalink}
## Associate all form elements with labels

Associate the `<label>` element with form elements using the *for* and *id* attributes. If there is not a visible label, provide a label and position it offscreen using CSS. 

{::nomarkdown}
<%= example_start %>
{:/}

    <label for="username">
    <input id="username" type="text">

{::nomarkdown}
<%= example_end %>
{:/}

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [Labelling controls - Tutorial page](http://www.w3.org/WAI/tutorials/forms/labels/): Provides details on how to label form controls and elements
* [Understanding SC 3.3.2 Labels or Instructions](http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html): WCAG 2.0 Success Criteria 3.3.2 for labels
* [Design solutions - navigating and finding content](http://www.w3.org/WAI/intro/people-use-web/browsing#navigation): Explores how providing labels benefits people with disabilities
{::nomarkdown}
<%= learn_more_end %>
{:/}

{:.attach_permalink}
## Match the reading order and the code order

As much as possible, ensure that the order of elements in the code matches the order of the visual design. This can be checked by removing CSS styling and comparing the order of the content with the visual hierarchy of the page.

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of code order versus visual order ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Provide meaning to non-standard interactive elements 

When creating new interactive elements, such as accordions, or off canvas navigation, ARIA attributes use to provide meaning and state. Additional code is usually required to implement interactions, for example, opening and closing elements.

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of hamburger menu, list of images as radio select, or collapsable accordion ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Ensure that all interactive elements are keyboard accessible

This is easily checked by trying to interactive with a page using the keyboard only. If some functionality, is not reachable using just the keyboard then there is a problem. Think about keyboard access when developing new interactive elements, such as menus, collapsable accordions, or media players.

{::nomarkdown}
<%= example_start %>
{:/}

[... **Note:** May be too complex to create an example for ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Check that your code validates

Validate HTML and CSS to identify possible compatibility problems. Fix identified problems to reduce the risk of errors on different devices.

{::nomarkdown}
<%= learn_more_start %>
{:/}

{::nomarkdown}
<%= learn_more_end %>
{:/}


{:.attach_permalink}
## Learn more about accessibility

[ ... Tip description goes here ... ]
