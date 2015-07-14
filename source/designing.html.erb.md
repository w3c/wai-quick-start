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
## Provide sufficient contrast between foreground and background

Foreground text needs to have sufficient contrast with background colors. This includes text on images, background gradients, buttons, and other elements. This does not apply for logos, or incidental text, such as text that happens to be in a photograph. There are tools to help check if color combinations meet the minimum contrast ratio defined in <acronym title="Web Content Accessibility Guidelines">WCAG</acronym>.

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
        <p class="instruction"><span class='required'>Required fields</span> are in red and marked with an <span class='required'>✻</span></p>
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
          <path d="m2.06902,49.92402l91.82715,-48.2264l-42.35869,75.85164l-49.46846,-27.62524z" class="green"/>
          <path d="m147.18413,95.39555l-41.64554,-80.62148l43.24728,27.76369l-1.60175,52.85779z" class="blue"/>
          <path d="m110.9136,148.01692l-27.57392,-82.3039l69.97661,50.70448l-42.40269,31.59943z" class="red"/>
          <path d="m21.07534,112.17733l48.69831,-22.53485l-4.90304,52.17411l-43.79528,-29.63926z" class="yellow"/>
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
    <figcaption>Accessible test question with numbers and color</figcaption>
    <div>
      <svg width="153" height="154" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <g>
          <title>Accessible triangle question</title>
          <path d="m2.06902,49.92402l91.82715,-48.2264l-42.35869,75.85164l-49.46846,-27.62524z" class="green" title="1. Green triangle"/>
          <text class="green" y="51" x="44"><tspan>1</tspan><tspan dx="100">: Angles are 30°, 60°, 90°</tspan></text>
          <path d="m147.18413,95.39555l-41.64554,-80.62148l43.24728,27.76369l-1.60175,52.85779z" class="blue" title="2. Blue triangle"/>
          <text class="blue" y="54" x="132"><tspan>2</tspan><tspan dx="100">: Angles are 30°, 30°, 120°</tspan></text>
          <path d="m110.9136,148.01692l-27.57392,-82.3039l69.97661,50.70448l-42.40269,31.59943z" class="red" title="3. Red triangle"/>
          <text class="red" y="114" x="110"><tspan>3</tspan><tspan dx="100">: Angles are 30°, 60°, 90°</tspan></text>
          <path d="m21.07534,112.17733l48.69831,-22.53485l-4.90304,52.17411l-43.79528,-29.63926z" class="yellow" title="4. Yellow triangle"/>
          <text class="yellow" y="118" x="48"><tspan>4</tspan><tspan dx="100">: Angles are 40°, 70°, 70°</tspan></text>
        </g>
      </svg>
      <form action="">
        <legend>Which is the right-angled triangle?</legend>
        <input id='answer-green2' name='answer2' name='green' type='radio'> <label for='answer-green2'>1. Green</label><br>
        <input id='answer-blue2' name='answer2' name='blue' type='radio'> <label for='answer-blue2'>2. Blue</label><br>
        <input id='answer-red2' name='answer2' name='red' type='radio'> <label for='answer-red2'>3. Red</label><br>
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
## Ensure that interactive elements are easy to identify

Provide distinct styles for interactive elements, such as links and buttons, to make them easy to identify. For example, change the appearance of links on mouse hover, keyboard focus, and touch-screen activation.

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

Ensure that page designs include clear and consistent naming, styling, and positioning of navigation elements. If your web site consists of many pages, provide more than one method of navigation, such as a breadcrumb navigation, a site search, or a site map. Help users understand where they are on a web page and in a website by providing orientation cues, such as clear headings and, if appropriate, breadcrumbs.

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**:
  * [<acronym title="Success Criteria">SC</acronym> 3.2.3 Consistent Navigation](/WAI/WCAG20/quickref/#consistent-behavior-consistent-locations)
  * [<acronym title="Success Criteria">SC</acronym> 2.4.5 Multiple Ways](/WAI/WCAG20/quickref/#navigation-mechanisms-mult-loc)
* **Background**:
  * [Understanding <acronym title="Success Criteria">SC</acronym> 3.2.3 Consistent Navigation](/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)
  * [Understanding <acronym title="Success Criteria">SC</acronym> 2.4.5 Multiple Ways](/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html)
* **User Story**: [How consistency and navigation can help someone with cognitive difficulties](/WAI/intro/people-use-web/stories#reporter)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Ensure that form elements include clearly associated labels

Ensure that all fields have a descriptive label adjacent to the field. For left-to-right languages, labels are usually positioned to the left or above the field, except for checkboxes and radio buttons where they are usually to the right. Avoid having too much space between labels and fields.

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
* **Tutorial**: [Visual position of label text](/WAI/tutorials/forms/labels/#visual-position-of-label-text)
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

Provide feedback for interactions, such as confirming form submission, alerting the user when something goes wrong, or notifying the user of changes on the page. Important feedback that requires user action should be presented in a prominent style. Instructions should be clear and easy to follow. 
 
{::nomarkdown}
<%= example :start, nil %>

<div class="errors">
  <figure>
    <figcaption>Example of prominent errors</figcaption>
    <div>
      <div class="error-list">
        <p>Please correct the following errors.</p>
        <ol class="fa-ul">
          <li id="error_email"><span class="fa fa-li fa-exclamation-triangle"></span><a href="javascript:document.getElementById('email5').focus()">You entered an invalid email</a></li>
          <li id="error_comment"><span class="fa fa-li fa-exclamation-triangle"></span><a href="javascript:document.getElementById('comment3').focus()">A Comment is required</a></li>
        </ol>
      </div>
      <form action="">
        <legend>Add a comment</legend>
        <p class="instruction"><span class='required'>Required fields are in red and </span> are marked with <span class='required'>✻</span></p>
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
* **Tutorial**: [User Notifications](/WAI/tutorials/forms/notifications/)
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
## Use spacing and headings to group related content

Use whitespace and proximity to make relationships between content more apparent. Style headings to group content, reduce clutter, and make it easier to scan. 

{::nomarkdown}
<%= learn_more %>
{:/}

* **<acronym title="Web Content Accessibility Guidelines">WCAG</acronym> Requirement**: [<acronym title="Success Criteria">SC</acronym> 2.4.6 Headings and Labels](/WAI/WCAG20/quickref/#navigation-mechanisms-descriptive)
* **Tutorial**: [Headings](/WAI/tutorials/page-structure/headings/)
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

Consider how page information is presented in different sized viewports, such as mobile phones or zoomed browser windows. Position and presentation of main elements, such as header and navigation can be changed to make best use of the space. Ensure that text size and line width are set to maximize readability and legibility.

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

Provide a text description to communicate what information or function is conveyed by an image. Images can be used in many different ways, such as to convey information, as decorative support, or in functional ways. Consider what the image is being selected to do and provide text to describe that purpose. Decorative images, that don't add information to the content of the page, should be presented in CSS or provided with null alternative text.

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
* **Tutorial**: [Images Concepts](/WAI/tutorials/images/)
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

These tips are just some of the important accessibility points to address when designing websites. There are more things to consider. The following resources will help you learn more about accessibility — why it is important for people with disabilities, for designers, and for organizations; about web accessibility guidelines; and much more. 

{::nomarkdown}
<%= learn_more %>
{:/}

* [<abbr title="World Wide Web Consortium">W3C</abbr> Accessibility](/standards/webdesign/accessibility): Introduces accessibility and provides links to many helpful resources
* [Accessibility Principles](/WAI/intro/people-use-web/principles): An introduction to the <acronym title="Web Content Accessibility Guidelines">WCAG</acronym> requirements
* [How people with disabilities use the web](/WAI/intro/people-use-web): Real-life examples of the benefits of accessibility for people with disabilities
* [Web Accessibility Tutorials](/WAI/tutorials/): Shows you how to develop web content that is accessible to people with disabilities
* [Before and After Demonstration](/WAI/demos/bad/): Shows an inaccessible and accessible version of the same website, with annotations on accessibility barriers and repairs

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
{:/}
