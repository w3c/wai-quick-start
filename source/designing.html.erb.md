---
title: Tips on Designing for Web Accessibility
icon: paint-brush
status: editors-draft
layout: guide
---

These introductory tips cover the basics of accessible user interface design and visual design.

{:.toc .no_toc}
## On this page

{:toc .toc}
* Will be replaced with the ToC

{::nomarkdown}
<%= tip :start %>
{:/}

{:.attach_permalink}
## Provide sufficient contrast between colors

Text needs to have sufficient contrast between foreground and background colors. This includes text on images, background gradients, buttons, and other elements. This does not apply for logos, or incidental text, such as text that happens to be in a photograph. There are tools to help check if color combinations meet the minimum contrast ratio defined in <acronym title="Web Content Accessibility Guidelines">WCAG</acronym>.

Note that "contrast" is used as a short form for the more technically correct term "luminance contrast".

{::nomarkdown}
<%= example :start, :plural %>

<div class="contrast two-column">
  <figure>
    <figcaption>Text with insufficient contrast</figcaption>
    <div>
      <p class="fail">Some people cannot read text if there is not sufficient contrast between the text and background. For others, bright colors (high luminance) are not readable; they need low luminance.</p>
    </div>
  </figure>
  <figure>
    <figcaption>Text with sufficient contrast</figcaption>
    <div>
      <p class="pass">Some people cannot read text if there is not sufficient contrast between the text and background. For others, bright colors (high luminance) are not readable; they need low luminance.</p>
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
* **Support Tools**: [List of tools to help determine contrast ratio](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#visual-audio-contrast-contrast-resources-head)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip :start %>
{:/}

{:.attach_permalink}
## Don't use color alone to convey information

While color can be useful to convey information, color should not be the only way information is conveyed. When using color to differentiate elements, also provide additional identification that does not rely on color perception. For example, use an asterisk in addition to color to indicate required form fields, and use labels to distinguish areas on graphs.

{::nomarkdown}
<%= example :start, :plural %>

<div class="color-alone two-column">
  <figure class="reference fail">
    <figcaption>Inaccessible instruction using color only</figcaption>
    <div>
      <form action="">
        <p class="instruction"><span class="required">Required fields are in red</span></p>
        <div class='row'>
          <label for="name1">Name:</label> <input type="text" id="name1" name="name">
        </div>
        <div class="row">
          <label class="required" for="email1">Email:</label> <input type="text" id="email1" name="email">
        </div>
      </form>
    </div>
  </figure>
  <figure class="reference pass">
    <figcaption>Accessible instruction using color and symbol</figcaption>
    <div>
      <form action="">
        <p class="instruction"><span class='required'>Required fields</span> are marked with <span class='required'>✻</span></p>
        <div class='row'>
          <label for="name2">Name:</label> <input type="text" id="name2" name="name"><br>
        </div>
        <div class="row">
          <label class="required" for="email2">Email ✻:</label> <input type="text" id="email2" name="email">
        </div>
      </form>
    </div>
  </figure>
  <figure class="question fail">
    <figcaption>Inaccessible test question using only color</figcaption>
    <div>
      <svg width="153" height="154" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <g>
          <title>Inaccessible triangle question</title>
          <path d="m2.06902,49.92402l91.82715,-48.2264l-42.35869,75.85164l-49.46846,-27.62524z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#0000ff"/>
          <path stroke-opacity="0" d="m110.9136,148.01692l-27.57392,-82.3039l69.97661,50.70448l-42.40269,31.59943z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#b40000"/>
          <path d="m147.18413,95.39555l-41.64554,-80.62148l43.24728,27.76369l-1.60175,52.85779z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#00ff00"/>
          <path d="m21.07534,112.17733l48.69831,-22.53485l-4.90304,52.17411l-43.79528,-29.63926z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#eaea00"/>
        </g>
      </svg>
      <form action="">
        <legend>Which is the right-angled triangle?</legend>
        <input id='answer-blue1' name='answer1' name='blue' type='radio'> <label for='answer-blue1'>Blue</label><br>
        <input id='answer-red1' name='answer1' name='red' type='radio'> <label for='answer-red1'>Red</label><br>
        <input id='answer-green1' name='answer1' name='green' type='radio'> <label for='answer-green1'>Green</label><br>
        <input id='answer-yellow1' name='answer1' name='yellow' type='radio'> <label for='answer-yellow1'>Yellow</label><br>
        <input id='answer-pass1' name='answer1' name='pass' type='radio'> <label for='answer-pass1'>Don't know</label>
      </form>
    </div>
  </figure>
  <figure class="question pass">
    <figcaption>Accessible test question with numbers in addition to color</figcaption>
    <div>
      <svg width="153" height="154" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <g>
          <title>Accessible triangle question</title>
          <path d="m2.06902,49.92402l91.82715,-48.2264l-42.35869,75.85164l-49.46846,-27.62524z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#0000ff" title="1. Blue triangle"/>
          <path stroke-opacity="0" d="m110.9136,148.01692l-27.57392,-82.3039l69.97661,50.70448l-42.40269,31.59943z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#b40000" title="2. Red triangle"/>
          <path d="m147.18413,95.39555l-41.64554,-80.62148l43.24728,27.76369l-1.60175,52.85779z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#00ff00" title="3. Green triangle"/>
          <path d="m21.07534,112.17733l48.69831,-22.53485l-4.90304,52.17411l-43.79528,-29.63926z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#eaea00" title="4. Yellow triangle"/>
          <text xml:space="preserve" text-anchor="middle" class="one" y="49" x="53" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#ffffff">1</text>
          <text xml:space="preserve" text-anchor="middle" y="53" x="131.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">2</text>
          <text xml:space="preserve" text-anchor="middle" y="114" x="114" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">3</text>
          <text xml:space="preserve" text-anchor="middle" y="118" x="52.5" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">4</text>
        </g>
      </svg>
      <form action="">
        <legend>Which is the right-angled triangle?</legend>
        <input id='answer-blue2' name='answer2' name='blue' type='radio'> <label for='answer-blue2'>1. Blue</label><br>
        <input id='answer-red2' name='answer2' name='red' type='radio'> <label for='answer-red2'>2. Red</label><br>
        <input id='answer-green2' name='answer2' name='green' type='radio'> <label for='answer-green2'>3. Green</label><br>
        <input id='answer-yellow2' name='answer2' name='yellow' type='radio'> <label for='answer-yellow2'>4. Yellow</label><br>
        <input id='answer-pass2' name='answer2' name='pass' type='radio'> <label for='answer-pass2'>Don't know</label>
      </form>
    </div>
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
<%= tip :start %>
{:/}

{:.attach_permalink}
## Ensure interactive elements are easy to identify

Provide distinct styles for interactive elements, such as links, buttons, and other controls, to make them easy to distinguish and identify. Those styles include interaction specific changes of appearance, for example in the event of a mouse hover, keyboard focus, and touch-screen activation. This helps users to identify the state of the element.

{::nomarkdown}
<%= example :start, :plural %>

<div class="focus two-column">
  <div>
    <figure>
      <figcaption>Style links to stand out from text</figcaption>
      <div>
        <p>Some people can't use a mouse and use a <a href="javascript:return false;">keyboard to navigate</a> through web pages, using the tab and arrow keys. It is important that all interactive elements can be reached using the keyboard and that it is clear which element has focus. If this is not clear then users won't know which link or element they are selecting.</p>
        <p></p>
      </div>
    </figure>
  </div>
  <div>
    <figure class="hover">
      <figcaption>Mouse hovered over link</figcaption>
      <div>
        <p><a href="javascript:return false;">keyboard to navigate</a><img src="images/pointer.png" width="20" alt=""></p>
      </div>
    </figure>
    <figure class="keyboard">
      <figcaption>Tabbed to link with keyboard</figcaption>
      <div>
        <p><a href="javascript:return false;">keyboard to navigate</a></p>
      </div>
    </figure>
    <figure class="active">
      <figcaption>Touch or click on link</figcaption>
      <div>
        <p><a href="javascript:return false;">keyboard to navigate</a><img src="images/pointer.png" width="20" alt=""></p>
      </div>
    </figure>
  </div>
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

Ensure page designs include clear and consistent naming, styling and positioning of navigation elements. If your web site consists of many pages, provide more than one method of navigation, such as a breadcrumb navigation, a site search, or a site map. Help users understand where they are on a web page and in a website by providing orientation cues, such as clear headings and, if appropriate, breadcrumbs.

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
## Ensure form elements include clearly associated labels

When creating forms, ensure that all fields have an adjacent, descriptive label. For left-to-right languages, labels are usually positioned to the left or above the field, except for checkboxes and radio buttons where it is usually to the right. Avoid having too much distance between labels and associated elements.

{::nomarkdown}
<%= example :start, :plural %>

<div class="labels">
  <figure class="pass">
    <figcaption>Good example of associated labels</figcaption>
    <div>
      <form action="">
        <legend>Add a comment</legend>
        <div class="row">
          <label for="email4">Your E-mail</label>
          <input type="text" id="email4" name="email">
        </div>
        <div class="row checkbox">
          <input type="checkbox" id="contact1" name="contact">
          <label for="contact1">I am happy for you to contact me</label>
        </div>
        <div class="row">
          <label for="website2">Your Website</label>
          <input type="text" id="website2" name="website">
        </div>
        <div class="row">
          <label for="comment2">Comment</label>
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
* **Tutorial**: [Explains more about the visual position of labels](/WAI/tutorials/forms/labels/#visual-position-of-label-text)
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

Provide feedback for any page interactions, such as confirmation of form submission, alerting the user when something goes wrong, or notification of changes on the page. Important feedback that requires user action should be presented in a prominent style. Any instructions should be clear and easy to follow. 
 
{::nomarkdown}
<%= example :start, nil %>

<div class="errors">
  <figure>
    <figcaption>Example of prominent errors</figcaption>
    <div>
      <div class="error-list">
        <p>There are two problems.</p>
        <ol class="fa-ul">
          <li id="error_email"><span class="fa fa-li fa-exclamation-triangle"></span><a href="javascript:document.getElementById('email5').focus()">The E-mail you provided is not valid</a></li>
          <li id="error_comment"><span class="fa fa-li fa-exclamation-triangle"></span><a href="javascript:document.getElementById('comment3').focus()">A Comment is required</a></li>
        </ol>
      </div>
      <form action="">
        <legend>Add a comment</legend>
        <p class="instruction"><span class='required'>Required fields</span> are marked with <span class='required'>✻</span></p>
        <div class="row">
          <label for="name5">Name</label>
          <input type="text" id="name5" name="name" value="Superbear">
        </div>
        <div class="row error">
          <label class="required" for="email5"><span class="fa fa-exclamation-triangle"></span> E-mail ✻</label>
          <input type="text" id="email5" name="email" value="superbear@@hq.example.com" aria-invalid="true" aria-describedby="error_email">
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

Consider how page information is presented in different sized viewports, such as mobile phones or zoomed browser windows. Position and presentation of main elements, such as header and navigation can be changed to make best use of the space. Ensure text size and line width are set to maximize readability and legibility.

{::nomarkdown}
<%= example %>


<div class="responsive">
  <figure>
    <figcaption>Example of content displayed in different viewport sizes</figcaption>
    <div>
      <img src="images/content_in_browser.png" alt="Example of content in a standard browser">
      <img src="images/content_in_phone.png" alt="Example of content displayed in a phone">
      <p>Display in a wide window with small text uses multiple columns for primary content, visible navigation options, and visible secondary information.</p>
      <p>Display in a narrow window, such as a mobile phone, or with large text uses single column for primary content, navigation options are revealed using an icon, and secondary information is also revealed via icon.</p>
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
## Provide a text alternative for images

Provide a text description to communicate what information or function images are being used for in designs. Images can be used in many different ways, such as to convey information, as decorative support, or in functional ways. Consider what the image is being selected to do and provide text to describe that purpose. Decorative images, that don't add information to the content of the page, should be presented in CSS or provided with empty alternative text.

{::nomarkdown}
<%= example %>

[... Text descriptions for: ... ]
[... Home icon with functional text 'Home' ...]

[... Photo of snow vista with descriptive text 'Used to evoke a sense of desire in snowboarders' ...]

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: [<acronym title="Success Criteria">SC</acronym> 1.1.1 Non-text Content](/WAI/WCAG20/quickref/#qr-text-equiv-all)
* **Tutorial**: [Demonstrates how to provide appropriate text alternatives based on the purpose of the image](/WAI/tutorials/images/)
* **Background**: [Understanding <acronym title="Success Criteria">SC</acronym> 1.1.1 Non-text Content](/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
* **User Story**: [Describes the value of text alternatives to a blind user](/WAI/intro/people-use-web/stories#accountant)

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

* [<abbr title="World Wide Web Consortium">W3C</abbr> Accessibility](/standards/webdesign/accessibility): Introduces accessibility and provides links to many helpful resources
* [Accessibility Principles](/WAI/intro/people-use-web/principles): An introduction to the <acronym title="Web Content Accessibility Guidelines">WCAG</acronym> requirements
* [How people with disabilities use the web](/WAI/intro/people-use-web): Real-life examples of the benefits of accessibility for people with disabilities
* [Web Accessibility Tutorials](/WAI/tutorials/): Shows you how to develop web content that is accessible to people with disabilities
* [Before and After Demonstration](/WAI/demos/bad/): Example accessible and inaccessible websites that share the same visual design, with annotations on key accessibility barriers and repairs

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
{:/}
