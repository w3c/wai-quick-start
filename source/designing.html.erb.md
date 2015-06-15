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
## Provide sufficient color contrast

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

* [Easy Checks - Contrast ratio](/WAI/eval/preliminary.html#contrast): Explores this tip further and provides information on what to check for
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
      <p><span class="required">Required fields in red</span></p>
      <label for="name1">Name:</label> <input type="text" id="name1" name="name"><br>
      <label class="required" for="email1">Email:</label> <input type="text" id="email1" name="email">
    </div>
  </figure>
  <figure class="reference pass">
    <figcaption>Appropriate reference with more than color</figcaption>
    <div>
      <p><span class='required'>Required fields</span> are marked with <span class='required'>✻</span></p>
      <label for="name2">Name:</label> <input type="text" id="name2" name="name"><br>
      <label class="required" for="email2">Email ✻:</label> <input type="text" id="email2" name="email">
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
## Ensure interactive elements are unambiguous and easy to identify

Provide distinct styles for the inactive and active states of interactive elements, including links. This includes mouse hover, keyboard focus, and possibly even when it is activated on a touch device. Ensure the alternative styling provides sufficient contrast, and make the element easily identifiable.

{::nomarkdown}
<%= example_start :plural %>

<div class="focus two-column">
  <figure>
    <figcaption>Plain links stand out from surrounding text</figcaption>
    <div>
      <p><a href="#">Plain link</a></p>
    </div>
  </figure>
  <figure class="hover">
    <figcaption>Hovering over a link should be indicated</figcaption>
    <div>
      <p><a href="#">Hovered link</a><img src="images/pointer.png" width="20" alt=""></p>
    </div>
  </figure>
  <figure class="keyboard">
    <figcaption>When a link receives keyboard focus, make it really apparent</figcaption>
    <div>
      <p><a href="#">Link with focus</a></p>
    </div>
  </figure>
  <figure class="active">
    <figcaption>Change style when a link is activated to highlight the action</figcaption>
    <div>
      <p><a href="#">Activated link</a><img src="images/pointer.png" width="20" alt=""></p>
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
## Provide consistent navigation and orientation

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

For designs that include audio or video content, ensure that there is provision for controls for the player. The controls should include as a minimum start, pause, seek controls, volume controls, and closed captions activation. Ensure their position, size, and styling make them sufficiently prominent.

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

{::nomarkdown}
<%= example_start :plural %>

<div class="labels">
  <figure class="fail">
    <figcaption>Example of poorly associated labels</figcaption>
    <div>
      <form action="">
        <div class="row">
          <label for="name3">Name</label>
          <input type="text" id="name3" name="name">
        </div>
        <div class="row">
          <label class="required" for="email3">Email ✻</label>
          <input type="text" id="email3" name="email">
        </div>
        <div class="row">
          <label for="website">Website</label>
          <input type="text" id="website" name="website">
        </div>
        <div class="row">
          <textarea name="comment" id="comment"></textarea>
        </div>
      </form>
    </div>
  </figure>
  <figure class="pass">
    <figcaption>Good example of associated labels</figcaption>
    <div>
      <form action="">
        <legend>Add a comment</legend>
        <div class="row">
          <label for="name4">Name</label>
          <input type="text" id="name4" name="name">
        </div>
        <div class="row">
          <label class="required" for="email4">Email ✻</label>
          <input type="text" id="email4" name="email">
        </div>
        <div class="row">
          <label for="website2">Website</label>
          <input type="text" id="website2" name="website">
        </div>
        <div class="row">
          <label class="required" for="comment2">Comment ✻</label>
          <textarea name="comment" id="comment2"></textarea>
        </div>
      </form>
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
## Provide clear feedback

When something goes wrong, it should be extremely obvious where to find the problem. Ideally, provide a list of errors above the form, repeat the error beside the offending form element, and create a style that make the element really stand out. Well designed and visible inline validation can be extremely helpful for many users, but needs careful coding to ensure accessibility.

{::nomarkdown}
<%= example_start %>

<div class="errors">
  <figure>
    <figcaption>Example of prominent errors</figcaption>
    <div>
      <div class="errors">
        <p>There were two problems with your submission.</p>
        <ol class="fa-ul">
          <li id="error_email"><span class="fa fa-li fa-exclamation-triangle"></span><a href="javascript:document.getElementById('email5').focus()">The email address provided does not seem to be valid</a></li>
          <li id="error_comment"><span class="fa fa-li fa-exclamation-triangle"></span><a href="javascript:document.getElementById('comment3').focus()">There was no comment provided</a></li>
        </ol>
      </div>
      <form action="">
        <legend>Add a comment</legend>
        <div class="row">
          <label for="name5">Name</label>
          <input type="text" id="name5" name="name" value="Superbear">
        </div>
        <div class="row error">
          <label class="required" for="email5"><span class="fa fa-exclamation-triangle"></span> Email ✻</label>
          <input type="text" id="email5" name="email" value="suberbear@@hq.space" aria-invalid="true" aria-describedby="error_email">
        </div>
        <div class="row">
          <label for="website2">Website</label>
          <input type="text" id="website3" name="website">
        </div>
        <div class="row error">
          <label class="required" for="comment3"><span class="fa fa-exclamation-triangle"></span> Comment ✻</label>
          <textarea name="comment" id="comment3" aria-invalid="true" aria-describedby="error_comment"></textarea>
        </div>
      </form>
    </div>
  </figure>
</div>

<%= example_end %>
{:/}

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [Understanding SC 3.3.1 Error Identification](/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html): WCAG 2.0 Success Criteria covering how 
* [User Notifications Tutorial](/WAI/tutorials/forms/notifications/): Shows how feedback can be provided in different ways
* [Ms. Olsen, Classroom student with attention deficit hyperactivity disorder (ADHD) and dyslexia](/WAI/intro/people-use-web/stories#classroomstudent): Describes how making important content easily identifiable can help 

{::nomarkdown}
<%= learn_more_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
{:/}

{:.attach_permalink}
## Use headers and whitespace to group related content

Text design benefits from clear headers to chunk up content, and main content that is not too wide. Ideal font size will vary for all users, so it is important to ensure that changes in the font size can be accommodated in the design, for example, by creating different layouts for different levels of zoom.

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [Understanding SC 2.4.6 Headings and Labels](/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html): WCAG 2.0 Success Criteria detailing how heading information should be presented
* [Headings Tutorial](/WAI/tutorials/page-structure/headings/): Discusses different ways to use headings to provide meaning to content
* [Ms. Laitinen, Accountant with blindness](/WAI/intro/people-use-web/stories#accountant): Describes how headings can be helpful for navigation 

{::nomarkdown}
<%= learn_more_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
<%= tip_start %>
{:/}

{:.attach_permalink}
## Create designs for different viewport sizes

Commonly called 'responsive design', consider how page information can be presented in different sized viewports, such as mobile phones or zoomed browser windows. Consider position and presentation of main elements, such as header and navigation. Also, ensure text size and line width are set to maximize readability and legibility.

{::nomarkdown}
<%= example_start %>


<div class="responsive">
  <figure>
    <figcaption>Example of content displayed in different viewport sizes</figcaption>
    <div>
      <img src="images/phone.png" alt="Example of content displayed in a phone">
      <img src="images/browser.png" alt="Example of content zoomed in a browser">
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
## Learn more about accessibility

These tips are important points to consider when designing accessible websites, but there is always more to learn. The following resources will help you find out more about accessibility, why it is important, and what guidelines exist to help support people with disabilities accessing the web.

{::nomarkdown}
<%= learn_more_start %>
{:/}

* [<abbr title="World Wide Web Consortium">W3C</abbr> Accessibility](/standards/webdesign/accessibility): <abbr title="World Wide Web Consortium">W3C</abbr> introduces accessibility and provides links to many helpful resources
* [Accessibility Principles](/WAI/intro/people-use-web/principles): Provides an introduction to the web accessibility requirements referenced in the international accessibility standards from W3C Web Accessibility Initiative
* [How people with disabilities use the web](/WAI/intro/people-use-web): Uses real-life examples to introduce accessibility, and explores tools and approaches that help, and barriers encountered 
* [Before and After Demonstration](/WAI/demos/bad/): Example accessible and inaccessible websites that share the same visual design, including annotations that highlight key accessibility barriers and repairs

{::nomarkdown}
<%= learn_more_end %>
{:/}

{::nomarkdown}
<%= tip_end %>
{:/}