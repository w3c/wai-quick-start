---
title: "Accessibility Tips for Development"
status: editors-draft
---

[ ... Brief description goes here ... ]

{:.attach_permalink}
## Ensure good semantic mark-up; e.g. if it looks like a header, mark it up with a header element

[ ... Tip description goes here ... ]

{:.attach_permalink}
## Associate a label with all form elements

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
## Include HTML5 structural elements

[ ... Tip description goes here ... ]

{:.attach_permalink}
## Match the reading order and the code order

[ ... Tip description goes here ... ]

{:.attach_permalink}
## Use ARIA to provide meaning to non-standard interactive elements 

[ ... Tip description goes here ... ]

{:.attach_permalink}
## Ensure that all interactive elements are keyboard accessible

[ ... Tip description goes here ... ]

{:.attach_permalink}
## Run Easy Checks periodically to ensure basic accessibility

[ ... Tip description goes here ... ]

{:.attach_permalink}
## Check your code validates

[ ... Tip description goes here ... ]

{:.attach_permalink}
## Learn more about accessibility

[ ... Tip description goes here ... ]