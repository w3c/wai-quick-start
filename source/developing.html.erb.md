---
title: Developing for Web Accessibility
subtitle: Tips for markup and coding
status: editors-draft
layout: guide
---

These tips cover the basics of accessible web development. This is not an exhaustive list of requirements for web accessibility, but cover important points and provide links to help you find out more.

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

* [Labelling controls - Tutorial page](/WAI/tutorials/forms/labels/): Provides details on how to label form controls and elements
* [Understanding SC 3.3.2 Labels or Instructions](/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html): WCAG 2.0 Success Criteria 3.3.2 for labels
* [Design solutions - navigating and finding content](/WAI/intro/people-use-web/browsing#navigation): Explores how providing labels benefits people with disabilities
{::nomarkdown}
<%= learn_more_end %>
{:/}

{:.attach_permalink}
## Reflect the reading order and the code order

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

These tips are important points to consider when developing accessible websites, but there is always more to learn. The following resources will help you find out more about accessibility, why it is important, and what guidelines exist to help support people with disabilities accessing the web.

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [<abbr title="World Wide Web Consortium">W3C</abbr> Accessibility](/standards/webdesign/accessibility): <abbr title="World Wide Web Consortium">W3C</abbr> introduces accessibility and provides links to many helpful resources
* [How people with disabilities use the web](/WAI/intro/people-use-web): Uses real-life examples to introduce accessibility, and explores tools and approaches that help, and barriers encountered 
* [Essential Components of Web Accessibility](/WAI/intro/components.php):  Shows how Web accessibility depends on several components working together and shows the relationship between the Web Accessibility Initiative guidelines
* [Web Accessibility Tutorials](/WAI/tutorials/): Tutorials to help create specific parts of websites that meet Web Content Accessibility Guidelines (WCAG) 2.0
* [Before and After Demonstration](/WAI/demos/bad/): Example accessible and inaccessible websites that share the same visual design, including annotations that highlight key accessibility barriers and repairs, and evaluation reports for <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0

{::nomarkdown}
<%= learn_more_end %>
{:/}