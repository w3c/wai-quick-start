---
title: Tips on Developing for Web Accessibility
icon: code
status: editors-draft
layout: guide
---

These introductory tips cover the basics of accessible front-end web development using HTML, CSS, and JavaScript.

{:.toc .no_toc}
## On this page

{:toc .toc}
* Will be replaced with the ToC

{::nomarkdown}
<%= tip %>
{:/}

{:.attach_permalink}
## Use progressive enhancement

Progressive enhancement starts with the basic core semantic HTML presenting the content and functionality. Additional styling and functionality are then progressively added with different technologies, such as CSS or JavaScript. If the added technology is not available, such as behind a firewall that prevents JavaScript, the core content will still be available.

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Adopt a responsive design approach

Use responsive design to present content in ways to take advantage of the size available in the browser. When less space is available, elements can be condensed or rearranged. Use <abbr="Cascading Style Sheet">CSS</abbr> media queries to target styling depending on the width of the viewport. Use `em` or `rem` units in the queries to make sure that the design adapts when changing the font size.

{::nomarkdown}
<%= example %>
{:/}

[... Media query example with corresponding image showing how change might occur ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Use mark-up to convey meaning and structure

HTML5 provides many elements that signify meaning, such as `<h1>`, `<nav>`, `<aside>`, which can be interpreted and communicated by assistive technologies. Use these elements to help structure content and convey meaning that is visually apparent. ARIA roles can be used to provide additional meaning to page elements, for example, using `role='search'` to identify search functionality. Work with designers and content authors to ensure the given meaning is agreed and consistently used.

{::nomarkdown}
<%= example %>
{:/}

[... Example of markup along side a visual design highlighting how different elements relate to design components ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Associate all form elements with labels

Associate the `<label>` element with form elements using the *for* and *id* attributes. If there is not a visible label, provide a label and position it offscreen using CSS. 

{::nomarkdown}
<%= example %>
{:/}

    <label for="username">
    <input id="username" type="text">

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* [Labelling controls - Tutorial page](/WAI/tutorials/forms/labels/): Provides details on how to label form controls and elements
* [Understanding SC 3.3.2 Labels or Instructions](/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html): WCAG 2.0 Success Criteria 3.3.2 for labels
* [Design solutions - navigating and finding content](/WAI/intro/people-use-web/browsing#navigation): Explores how providing labels benefits people with disabilities
{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Help users avoid and correct mistakes

Provide clear instructions on required information formats. Be as forgiving of format as possible when accepting information. For example, accept phone numbers that include spaces and delete the spaces as needed. Clearly identify errors that cannot be auto-corrected, including a description of the specific error, where it occurred, and how to correct it. Provide an in-page link for easy access from the error to the field when feasible. 

{::nomarkdown}
<%= example %>
{:/}

[... Example form with instructions ...]

[... Example set of error notifications, maybe different from the Designing? ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Reflect the reading order in the code order

As much as possible, ensure that the order of elements in the code matches the order of the visual design. This can be checked by removing CSS styling and comparing the order of the content with the visual hierarchy of the page.

{::nomarkdown}
<%= example %>
{:/}

[... Example of code order versus visual order ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Provide meaning to non-standard interactive elements 

When creating new interactive elements, such as accordions, or off canvas navigation, ARIA attributes use to provide meaning and state. Additional code is usually required to implement interactions, for example, opening and closing elements.

{::nomarkdown}
<%= example %>
{:/}

[... Example of hamburger menu, list of images as radio select, or collapsable accordion ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Ensure that all interactive elements are keyboard accessible

This is easily checked by trying to interact with a page using the keyboard only. If some functionality, is not reachable using just the keyboard then there is a problem. Think about keyboard access when developing new interactive elements, such as menus, collapsable accordions, or media players.

{::nomarkdown}
<%= example %>
{:/}

[... **Note:** May be too complex to create an example for ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Check that your code validates

Validate HTML and CSS to identify possible compatibility problems. Fix identified problems to reduce the risk of errors on different devices.

{::nomarkdown}
<%= learn_more %>
{:/}

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Learn more about accessibility

These tips are important points to consider when developing accessible websites, but there is always more to learn. The following resources will help you find out more about accessibility, why it is important, and what guidelines exist to help support people with disabilities accessing the web.

{::nomarkdown}
<%= learn_more %>
{:/}

* [<abbr title="World Wide Web Consortium">W3C</abbr> Accessibility](/standards/webdesign/accessibility): Introduces accessibility and provides links to many helpful resources
* [Accessibility Principles](/WAI/intro/people-use-web/principles): An introduction to the <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> requirements
* [How people with disabilities use the web](/WAI/intro/people-use-web): Real-life examples of the benefits of accessibility for people with disabilities
* [Web Accessibility Tutorials](/WAI/tutorials/): Shows you how to develop web content that is accessible to people with disabilities
* [Before and After Demonstration](/WAI/demos/bad/): Example accessible and inaccessible websites that share the same visual design, with annotations that highlight key accessibility barriers and repairs, and evaluation reports for <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0
* [Web Accessibility Evaluation Tools List](/WAI/ER/tools/): Provides a range of tools to help explore the accessibility of code


{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
{:/}
