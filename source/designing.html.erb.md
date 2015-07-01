---
title: Tips on Designing for Web Accessibility
icon: paint-brush
status: editors-draft
layout: guide
---

These introductory tips cover the basics of accessible user interface and visual design.

{:.toc .no_toc}
## On this page

{:toc .toc}
* Will be replaced with the ToC

{::nomarkdown}
<%= tip :start, 'option1' %>
{:/}

{:.attach_permalink}
## Provide sufficient contrast between colors

Text needs to have sufficient contrast between foreground and background colors. This includes text on images, buttons, and other elements. A minimum contrast ratio is required by the guidelines and tools are available to help you determine the ratio between colors. This does not apply for logos, or incidental text, such as text that happens to be in a photograph.

Note that "contrast" is used as a short form for the more technically correct term "luminance contrast".

{::nomarkdown}
<%= example :start, :plural %>

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
      <p class="pass">Sed do eiusmod tempor incid</p>
    </div>
  </figure>
  <figure>
    <figcaption>Button with sufficient contrast</figcaption>
    <div>
      <button>Remember buttons</button>
    </div>
  </figure>
</div>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: [<acronym title="Success Criteria">SC</acronym> 1.4.3 Contrast (Minimum)](/WAI/WCAG20/quickref/#visual-audio-contrast-without-color)
* **How To**: [How to check contrast ratio](/WAI/eval/preliminary.html#contrast)
* **Background**: [Understanding <acronym title="Success Criteria">SC</acronym> 1.4.3 Contrast (Minimum)](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
* **User Story**: [How a user with "color blindness" experiences the Web](/WAI/intro/people-use-web/stories#shopper)
* **Support Tools**: [List of resources to help determine contrast ratio](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#visual-audio-contrast-contrast-resources-head)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip :start, 'option2' %>
{:/}

{:.attach_permalink}
## Don't use color alone to signify meaning

Color can be a useful indicator of emphasis or meaning but should not be the only way such meaning is conveyed. Use additional identification that does not rely on color perception when using color to differentiate elements. For example, use an asterisk in addition to color to indicate required form fields, and use labels and patterns to help distinguish areas on graphs and maps.

{::nomarkdown}
<%= example :start, :plural %>

<div class="color-alone two-column">
  <figure class="fail">
    <figcaption>Inaccessible pie chart</figcaption>
    <img src="images/inaccessible_pie_chart.png" width="150" height="150" alt="A pie chart">
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
    <img src="images/accessible_pie_chart.png" width="150" height="150" alt="Chart of most battles won, Batbear is in the lead">
    <ul>
      <li class="super">Superbear (28%)</li>
      <li class="aqua">Aquabear (11%)</li>
      <li class="bat">Batbear (31%)</li>
      <li class="star">Starbear (19%)</li>
      <li class="blue">Blue Bear (11%)</li>
    </ul>
  </figure>
</div>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: [<acronym title="Success Criteria">SC</acronym> 1.4.1 Use of Color](/WAI/WCAG20/quickref/#visual-audio-contrast-without-color)
* **Background**: [Understanding <acronym title="Success Criteria">SC</acronym> 1.4.1 Use of Color](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
* **User Story**: [How a user with "color blindness" experiences the Web](/WAI/intro/people-use-web/stories#shopper)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip :start, 'option3' %>
{:/}

{:.attach_permalink}
## Ensure interactive elements are easy to identify

Provide distinct styles for interactive elements, such as links, buttons, and other controls, to make them easy to distinguish and identify. Where appropriate, provide distinct styles for mouse hover, keyboard focus, and touch-screen activation so that users can identify the state of the element.

{::nomarkdown}
<%= example :start, :plural %>

<div class="focus four-column">
  <figure>
    <figcaption>Plain links stand out from surrounding text</figcaption>
    <div>
      <p><a href="#">Plain link</a></p>
    </div>
  </figure>
  <figure class="hover">
    <figcaption>Hovering over a link changes style</figcaption>
    <div>
      <p><a href="#">Hovered link</a><img src="images/pointer.png" width="20" alt=""></p>
    </div>
  </figure>
  <figure class="keyboard">
    <figcaption>A link with keyboard focus can be really clear</figcaption>
    <div>
      <p><a href="#">Link with focus</a></p>
    </div>
  </figure>
  <figure class="active">
    <figcaption>Change style for touched or clicked links</figcaption>
    <div>
      <p><a href="#">Activated link</a><img src="images/pointer.png" width="20" alt=""></p>
    </div>
  </figure>
</div>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: [<acronym title="Success Criteria">SC</acronym> 2.4.7 Focus Visible](/WAI/WCAG20/quickref/#navigation-mechanisms-focus-visible)
* **Background**: [Understanding <acronym title="Success Criteria">SC</acronym> 2.4.7 Focus Visible](/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)
* **User Story**:
  * [Challenges faced by someone with a limited ability to use a mouse](/WAI/intro/people-use-web/stories#reporter)
  * [Challenges faced by an older user with hand tremors](/WAI/intro/people-use-web/stories#reporter)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Provide clear and consistent navigation options

Ensure page designs include clear and consistent naming, styling and positioning of navigation elements. Provide more than one method of navigation, such as a navigation menu, a site search, or a site map. Help users understand where they are on a web page and in a website by providing orientation cues, such as clear headings and, if appropriate, breadcrumbs.

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: [<acronym title="Success Criteria">SC</acronym> 3.2.3 Consistent Navigation](/WAI/WCAG20/quickref/#consistent-behavior-consistent-locations)
* **Background**: [Understanding <acronym title="Success Criteria">SC</acronym> 3.2.3 Consistent Navigation](/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)
* **User Story**: [How consistency and navigation can help someone with cognitive difficulties](/WAI/intro/people-use-web/stories#reporter)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Provide visible controls for audio and video players

For designs that include audio or video content, ensure that there is provision for controls for the player. The controls should include as a minimum start, pause, seek controls, volume controls, and closed captions activation. Ensure their position, size, and styling make them sufficiently prominent. Provide styling options for when each element is active, for example, hovered over with mouse, or receiving keyboard focus.

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Ensure form elements include clearly associated labels

When creating forms, ensure that all elements have a descriptive label adjacent to the element. Labels are usually positioned to the left or above the element, except for checkboxes and radio buttons where it is usually to the right. Avoid having too much distance between labels and associated elements.

{::nomarkdown}
<%= example :start, :plural, 'labels_example' %>

<div class="labels">
  <figure class="fail">
    <figcaption>Example of poorly associated labels</figcaption>
    <div>
      <form action="">
        <div class="row">
          <label class="required">Email ✻</label>
          <input type="text" id="email3" name="email">
        </div>
        <div class="row">
          <label>Website</label>
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
          <label class="required" for="email4">Your Email ✻</label>
          <input type="text" id="email4" name="email">
        </div>
        <div class="row">
          <label for="website2">Your Website</label>
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

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: 
  * [<acronym title="Success Criteria">SC</acronym> 3.3.2 Labels or Instructions](/WAI/WCAG20/quickref/#minimize-error-cues)
  * [<acronym title="Success Criteria">SC</acronym> 2.4.6 Headings and Labels](/WAI/WCAG20/quickref/#navigation-mechanisms-descriptive)
* **Background**:
  * [Understanding <acronym title="Success Criteria">SC</acronym> 3.3.2 Labels or Instructions](/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
  * [Understanding <acronym title="Success Criteria">SC</acronym> 2.4.6 Headings and Labels](/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
* **Tutotial**: [Explains more about the visual position of labels](/WAI/tutorials/forms/labels/#visual-position-of-label-text)
* **User Story**: [How clear labelling can help someone with cognitive difficulties](/WAI/intro/people-use-web/stories#supermarketassistant)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Provide clear feedback

Provide feedback for any page interactions, such as confirmation of form submission, alerting the user when something when wrong, or notification of changes on the page. Important feedback that requires user action should be presented in a style that really stands out. Any instructions should be clear and easy to follow. 
 
{::nomarkdown}
<%= example :start, nil, 'feedback_example' %>

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
          <input type="text" id="email5" name="email" value="superbear@@hq.space" aria-invalid="true" aria-describedby="error_email">
        </div>
        <div class="row">
          <label for="website3">Website</label>
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

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: [<acronym title="Success Criteria">SC</acronym> 3.3.1 Error Identification](/WAI/WCAG20/quickref/#minimize-error-identified)
* **Tutorial**: [Shows how feedback can be provided in different ways](/WAI/tutorials/forms/notifications/)
* **Background**: [Understanding <acronym title="Success Criteria">SC</acronym> 3.3.1 Error Identification](/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
* **User Story**: [How making important content easily identifiable can help](/WAI/intro/people-use-web/stories#classroomstudent)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Use headings and spacing to group related content

Content design benefits from clear headings to chunk up content. Use whitespace to reduce clutter, make related content or elements more apparent, and make content more scannable.

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: [<acronym title="Success Criteria">SC</acronym> 2.4.6 Headings and Labels](/WAI/WCAG20/quickref/#navigation-mechanisms-descriptive)
* **Tutorial**: [Discusses different ways to use headings to provide meaning to content](/WAI/tutorials/page-structure/headings/)
* **Background**: [Understanding <acronym title="Success Criteria">SC</acronym> 2.4.6 Headings and Labels](/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
* **User Story**: [Describes how headings can be helpful for navigation](/WAI/intro/people-use-web/stories#accountant)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Create designs for different viewport sizes

Commonly called 'responsive design', consider how page information is presented in different sized viewports, such as mobile phones or zoomed browser windows. Position and presentation of main elements, such as header and navigation can be changed to make best use of the space. Ensure text size and line width are set to maximize readability and legibility.

{::nomarkdown}
<%= example %>


<div class="responsive">
  <figure>
    <figcaption>Example of content displayed in different viewport sizes</figcaption>
    <div>
      <img src="images/content_in_browser.png" alt="Example of content in a standard browser">
      <img src="images/content_in_phone.png" alt="Example of content displayed in a phone">
      <p>Browser display uses multiple columns for primary content, visible navigation options, and visible secondary information.</p>
      <p>Mobile display uses single column for primary content, navigation options are revealed using an icon, and secondary information is also revealed via icon.</p>
    </div>
  </figure>
</div>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: [<acronym title="Success Criteria">SC</acronym> 1.4.4 Resize text](/WAI/WCAG20/quickref/#visual-audio-contrast-scale)
* **Background**: [Understanding <acronym title="Success Criteria">SC</acronym> 1.4.4 Resize text](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
* **User Story**: [Describes how alternative views of zoomed pages can be helpful](/WAI/intro/people-use-web/stories#retiree)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Learn more about accessibility

These tips are important points to consider when designing accessible websites, but there is always more to learn. The following resources will help you find out more about accessibility, why it is important, and what guidelines exist to help support people with disabilities accessing the web.

{::nomarkdown}
<%= learn_more %>
{:/}

* [<abbr title="World Wide Web Consortium">W3C</abbr> Accessibility](/standards/webdesign/accessibility): <abbr title="World Wide Web Consortium">W3C</abbr> introduces accessibility and provides links to many helpful resources
* [Accessibility Principles](/WAI/intro/people-use-web/principles): Provides an introduction to the web accessibility requirements referenced in the international accessibility standards from W3C Web Accessibility Initiative
* [How people with disabilities use the web](/WAI/intro/people-use-web): Uses real-life examples to introduce accessibility, and explores tools and approaches that help, and barriers encountered 
* [Web Accessibility Tutorials](/WAI/tutorials/): Shows you how to develop web content that is accessible to people with disabilities, and that provides a better user experience for everyone
* [Before and After Demonstration](/WAI/demos/bad/): Example accessible and inaccessible websites that share the same visual design, including annotations that highlight key accessibility barriers and repairs

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
{:/}