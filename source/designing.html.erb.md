---
title: "Accessibility Tips for Design"
status: editors-draft
---

[ ... Brief description goes here ... ]

{:.toc .no_toc}
## On this page

{:toc .toc}
* Will be replaced with the ToC

{:.attach_permalink}
## Provide sufficient contrast between colors

For each text foreground/background color combination, including on buttons, check that the contrast between the two colors is sufficient. For text on a background image check a sample of dominant colors or provide some way to make the text stand out. Where color is used to differentiate two or more objects, ensure that contrast is checked between the colors of adjacent objects.

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [List of Contrast Ratio tools](//www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#visual-audio-contrast-contrast-resources-head): Tools to help in exploring color contrast
* [Understanding SC 1.4.3 Contrast (Minimum)](//www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html): WCAG 2.0 Success Criteria for color contrast
* [Mr. Lee, Online shopper with color blindness](//www.w3.org/WAI/intro/people-use-web/stories#shopper): Describes how a user with "color blindness" experiences the Web

{::nomarkdown}
<%= learn_more_end %>
{:/}

{:.attach_permalink}
## Don't use color alone to signify meaning

When differentiating elements in diagrams, such as graphs or maps, use something more than color to do so. Also, if referring to a highlighted element in text, ensure that color is not the only difference referenced.

{::nomarkdown}
<%= example_start %>
{:/}

[... Image of example graph ...]

[... Reference to color in text example? ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Ensure interactive elements are easily identified

Provide a different style for links and interactive elements for when the element is active. This includes mouse hover, keyboard focus, and possibly even when it is activated on a touch device. Ensure the alternative styling provides sufficient contrast, and make the element easily identifiable.

<!-- TODO: Change in title requires a slight change to copy -->

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of styles for normal, hover, focus, active on link (and form element)? ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Provide consistent navigation and orientation information

Ensure page designs include clear and consistent navigation that indicate where in a site the user is, for example, breadcrumbs, and how they can access other areas of the site, for example, primary navigation in a header. Secondary navigation styles may be required for specific web content, such as products in an online store. Aim for consistency in style if secondary navigation is used in many different places.

<!-- TODO: Edit to reflect new title -->

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of various navigation styles? ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Provide visible controls for audio and video players

For designs that include audio or video content, ensure that there is provision for controls for the player. The controls should include as a minimum start, pause, seek controls, and volume controls. Ensure their position, size, and styling make them sufficiently prominent.

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of good and bad controls? ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Ensure form elements include clearly associated labels

When creating forms, ensure that all elements have a descriptive label adjacent to the element. Labels are usually positioned to the left or above the element, except for checkboxes and radio buttons where it is usually to the right. Avoid having too much distance between labels and associated elements.

[**Note:** What about elements where labels are not required?]

[**Note:** Should some mention be made regarding space for instructions?]

{::nomarkdown}
<%= example_start %>
{:/}

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Provide clear presentation of errors

When something goes wrong, it should be extremely obvious where to find the problem. Ideally, provide a list of errors above the form, repeat the error beside the offending form element, and create a style that make the element really stand out. Inline validation can be extremely helpful for many users, but needs careful coding to ensure accessibility.

[**Note:** Should something on this be included in the developing section?]

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of form errors ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Use headers and whitespace to group content

Text design benefits from clear headers to chunk up content, and main content that is not too wide. Ideal font size will vary for all users, so it is important to ensure that changes in the font size can be accommodated in the design, for example, by creating different layouts for different levels of zoom.

<!-- TODO: Update description to reflect new title -->

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of text layout? ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Present text in a good font size and line length

Ideal font size will vary for all users, so it is important to ensure that changes in the font size can be accommodated in the design, for example, by creating different layouts for different levels of zoom. For all designs ensure that the line length is kept to about 80 characters maximum.

[**Note:** Suggests a separate section on creating responsive designs?]

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of text layout? ...]

{::nomarkdown}
<%= example_end %>
{:/}

{:.attach_permalink}
## Learn more about accessibility

[ ... Tip description goes here ... ]

{::nomarkdown}
<%= example_start %>
{:/}

{::nomarkdown}
<%= example_end %>
{:/}
