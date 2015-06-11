---
title: Designing for Web Accessibility
subtitle: Tips for Getting Started
icon: paint-brush
status: editors-draft
layout: guide
heading: option1
---

These introductory tips cover the basics of accessible user interface and visual design.

{:.toc .no_toc}
## On this page

{:toc .toc}
* Will be replaced with the ToC

{::nomarkdown}
<%= tip_start %>
{:/}

{:.attach_permalink}
## Provide sufficient contrast between colors

Wherever text is displayed, including on buttons, check that you have chosen foreground/background color combinations that have sufficient contrast. For text on a background image check a sample of dominant colors or provide some way to make the text stand out. Where color is used to differentiate two or more objects, ensure that contrast is checked between the colors of adjacent objects.

{::nomarkdown}
<%= example_start :plural %>

<div class="contrast three-column">
  <figure>
    <figcaption>Text with insufficient contrast</figcaption>
    <div>
      <p class="fail">Lorem ipsum dolor sit amet</p>
    </div>
  </figure>
  <figure>
    <figcaption>Text with sufficient contrast</figcaption>
    <div>
      <p class="pass">Sed do eiusmod tempor incididunt</p>
    </div>
  </figure>
  <figure>
    <figcaption>Button with sufficient contrast</figcaption>
    <div>
      <button>Remember buttons</button>
    </div>
  </figure>
</div>

<%= example_end %>
{:/}

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [List of Contrast Ratio tools](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#visual-audio-contrast-contrast-resources-head): Tools to help in exploring color contrast
* [Understanding SC 1.4.3 Contrast (Minimum)](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html): WCAG 2.0 Success Criteria for color contrast
* [Mr. Lee, Online shopper with color blindness](/WAI/intro/people-use-web/stories#shopper): Describes how a user with "color blindness" experiences the Web

{::nomarkdown}
<%= learn_more_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
{:/}

{:.attach_permalink}
## Don't use color alone to signify meaning

Color can be a useful indicator of emphasis or meaning but can never be the only way such meaning is conveyed. Use additional notification methods that do not rely on color perception when using color to differentiate elements, for example in graphs or maps, or when highlighting information, for example required form fields or important text.

{::nomarkdown}
<%= example_start :plural %>

<div class="color-alone two-column">
  <figure class="fail">
    <figcaption>Inaccessible pie chart</figcaption>
    <img src="images/inaccessible_pie_chart.png" width="200" height="200" alt="A pie chart">
    <ul>
      <li class="super">Superbear</li>
      <li class="aqua">Aquabear</li>
      <li class="bat">Batbear</li>
      <li class="star">Starbear</li>
      <li class="blue">Blue Bear</li>
    </ul>
  </figure>
  <figure class="pass">
    <figcaption>Accessible pie chart</figcaption>
    <img src="images/accessible_pie_chart.png" width="200" height="200" alt="Chart of most battles won, Batbear is in the lead">
    <ul>
      <li class="super">Superbear (28%)</li>
      <li class="aqua">Aquabear (11%)</li>
      <li class="bat">Batbear (31%)</li>
      <li class="star">Starbear (19%)</li>
      <li class="blue">Blue Bear (11%)</li>
    </ul>
  </figure>
  <figure class="reference fail">
    <figcaption>Inappropriate reference using color only</figcaption>
    <div>
      <p><span class="required">Required fields</span></p>
      <label for="name1">Name:</label> <input type="text" id="name1"><br>
      <label class="required" for="email1">Email:</label> <input type="text" id="email1">
    </div>
  </figure>
  <figure class="reference pass">
    <figcaption>Appropriate reference with more than color</figcaption>
    <div>
      <p><span class='required'>Required fields</span> are marked with <span class='required'>✻</span></p>
      <label for="name2">Name:</label> <input type="text" id="name2"><br>
      <label class="required" for="email2">Email ✻:</label> <input type="text" id="email2">
    </div>
  </figure>
</div>

<%= example_end %>
{:/}

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [Understanding SC 1.4.1 Use of Color](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html): WCAG 2.0 Success Criteria on using color
* [Mr. Lee, Online shopper with color blindness](/WAI/intro/people-use-web/stories#shopper): Describes how a user with "color blindness" experiences the Web

{::nomarkdown}
<%= learn_more_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
{:/}

{:.attach_permalink}
## Ensure interactive elements are easily identified

Provide distinct styles for the inactive and active states of interactive elements, including links. This includes mouse hover, keyboard focus, and possibly even when it is activated on a touch device. Ensure the alternative styling provides sufficient contrast, and make the element easily identifiable.

{::nomarkdown}
<%= example_start %>

<div class="focus three-column">
  <figure>
    <figcaption>Plain link</figcaption>
    <div>
      <p><a href="#">Link one</a></p>
    </div>
  </figure>
  <figure class="hover">
    <figcaption>Hovering over a link</figcaption>
    <div>
      <p><a href="#">Link two</a><img src="images/pointer.png" width="20" alt=""></p>
    </div>
  </figure>
  <figure class="keyboard">
    <figcaption>Link with keyboard focus</figcaption>
    <div>
      <p><a href="#">Link three</a></p>
    </div>
  </figure>
  <figure class="active">
    <figcaption>Link when activated</figcaption>
    <div>
      <p><a href="#">Link four</a><img src="images/pointer.png" width="20" alt=""></p>
    </div>
  </figure>
</div>

<%= example_end %>
{:/}

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [Understanding SC 2.4.7 Focus Visible](/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html): WCAG 2.0 Success Criteria covering element focus
* [Mr. Jones, Reporter with repetitive stress injury](/WAI/intro/people-use-web/stories#reporter): Describes some challenges faced by someone with limited ability to use a mouse
* [Mr. Yunus, Retiree with low vision, hand tremor, and mild short-term memory loss](/WAI/intro/people-use-web/stories#retiree): Describes some challenges faced by an older user

{::nomarkdown}
<%= learn_more_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
{:/}

{:.attach_permalink}
## Provide consistent navigation and orientation information

Ensure page designs include clear and consistent navigation. Indicate where in a site the user is, for example, using breadcrumbs, and how they can access other areas of the site, for example, primary navigation in a header. Secondary navigation styles may be required for specific web content, such as products in an online store. Aim for consistency in style if secondary navigation is used in many different places.

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [Understanding SC 3.2.3 Consistent Navigation](/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html): WCAG 2.0 Success Criteria relating to consistent navigation
* [Mr. Sands, Supermarket assistant with Down syndrome](/WAI/intro/people-use-web/stories#supermarketassistant): Describes how consistency and navigation can help someone with cognitive difficulties 

{::nomarkdown}
<%= learn_more_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
{:/}

{:.attach_permalink}
## Provide visible controls for audio and video players

For designs that include audio or video content, ensure that there is provision for controls for the player. The controls should include as a minimum start, pause, seek controls, and volume controls. Ensure their position, size, and styling make them sufficiently prominent.

{::nomarkdown}
<%= example_start %>

<div class="visible_controls two-column">
  <figure>
    <figcaption>Example media player controls</figcaption>
    <div>
      <p><img src="images/example_media_player.png" alt="Example media player"></p>
      <p>Provide styling options for when each element is active, for example, hovered over with mouse, or receiving keyboard focus.</p>
    </div>
  </figure>
</div>


<%= example_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
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

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
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

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
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

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
{:/}

{:.attach_permalink}
## Present text in a flexible font size and line length

Ideal font size will vary for all users, so it is important to ensure that changes in the font size can be accommodated in the design, for example, by creating different layouts for different levels of zoom. For all designs ensure that the line length is kept to about 80 characters maximum.

[**Note:** Suggests a separate section on creating responsive designs?]

{::nomarkdown}
<%= example_start %>
{:/}

[... Example of text layout? ...]

{::nomarkdown}
<%= example_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
{:/}

{:.attach_permalink}
## Learn more about accessibility

These tips are important points to consider when designing accessible websites, but there is always more to learn. The following resources will help you find out more about accessibility, why it is important, and what guidelines exist to help support people with disabilities accessing the web.

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [<abbr title="World Wide Web Consortium">W3C</abbr> Accessibility](/standards/webdesign/accessibility): <abbr title="World Wide Web Consortium">W3C</abbr> introduces accessibility and provides links to many helpful resources
* [How people with disabilities use the web](/WAI/intro/people-use-web): Uses real-life examples to introduce accessibility, and explores tools and approaches that help, and barriers encountered 
* [Before and After Demonstration](/WAI/demos/bad/): Example accessible and inaccessible websites that share the same visual design, including annotations that highlight key accessibility barriers and repairs

{::nomarkdown}
<%= learn_more_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
{:/}