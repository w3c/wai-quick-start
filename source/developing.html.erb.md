---
title: Tips on Developing for Web Accessibility
icon: code
status: editors-draft
layout: guide
---

These introductory tips cover the basics of accessible front-end web development using <abbr>HTML</abbr>, <abbr>CSS</abbr>, and JavaScript.

{:.toc .no_toc}
## On this page

{:toc .toc}
* Will be replaced with the ToC

{::nomarkdown}
<%= tip %>
{:/}

{:.attach_permalink}
## Associate all form elements with labels

Associate the `<label>` element with form elements using the *for* and *id* attributes. Position the `<label>` element offscreen using <abbr>CSS</abbr> when the design does not include a visible label. Beware of doing this as many sighted people may still misinterpret the required input without an obvious label.

{::nomarkdown}
<%= example %>

<div class="form-labels">
  <figure>
    <figcaption>Form field with associated label</figcaption>
    <% html_example do %>
      <label for="username">Username:</label>
      <input id="username" type="text">
    <% end %>
  </figure>
</div>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**: [<abbr>SC</abbr> 3.3.2 Labels or Instructions](/WAI/WCAG20/quickref/#minimize-error-cues)
* **Tutorial**: [Labelling Controls](/WAI/tutorials/forms/labels/)
* **Background**: [Understanding <abbr>SC</abbr> 3.3.2 Labels or Instructions](/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Include alternative text for images

{::nomarkdown}
<%= related_issues 151 %>
{:/}

Ensure that alternative text for images is added to all informative and functional images. Decorative images should have empty alternative text, `alt=''`, or should be included using <abbr>CSS</abbr>.

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**: [<abbr>SC</abbr> 1.1.1 Non-text Content](/WAI/WCAG20/quickref/#qr-text-equiv-all)
* **Tutorial**: [Images](/WAI/tutorials/images/)
* **Background**: [Understanding <abbr>SC</abbr> 1.1.1 Non-text Content](/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
* **User Story**: [Describes the value of text alternatives to a blind user](/WAI/intro/people-use-web/stories#accountant)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Identify page language and language changes

Provide an indication of language in the `html` tag using the `lang` attribute. Use the `lang` attribute on specific elements when the language of element differs from the rest of the page.

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**:
  * [<abbr>SC</abbr> 3.1.1 Language of Page](/WAI/WCAG20/quickref/#meaning-doc-lang-id)
  * [<abbr>SC</abbr> 3.1.2 Language of Parts](/WAI/WCAG20/quickref/#meaning-other-lang-id)
* **How To**: [Declaring language in HTML](/International/questions/qa-html-language-declarations)
* **Background**:
  * [Understanding <abbr>SC</abbr> 3.1.1 Language of Page](/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html)
  * [Understanding <abbr>SC</abbr> 3.1.2 Language of Parts](/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Use mark-up to convey meaning and structure

Use structural elements to mark-up headings, lists, tables, etc. HTML5 provides additional elements, such as `<nav>` and `<aside>`, to better structure your documents. <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> roles can provide additional meaning, for example, using `role='search'` to identify search functionality. Work with designers and content writers to agree on meanings and then use them consistently.

{::nomarkdown}
<%= example :start, :plural %>

<div class="mark-up">
  <figure>
    <figcaption>Provide structure and meaning with HTML elements</figcaption>
    <% html_example do %>
    <section>
      <article>
        <h2>Superbear saves the day</h2>
        <time>7 Aug 2015</time>
        <p>The city's favorite bear yet again proves his mettle by rescuing a young cat from a tree. Witnesses say that Superbear's efforts were not appreciated by the feline, who inflicted some minor scratch wounds on his rescuer.</p>
        <aside>
          <h3>Related</h3>
          <ul>
            <li><a href="#">Bear receives key to city</a></li>
            <li><a href="#">Superbear stands for mayor</a></li>
          </ul>
        </aside>
      </article>
    </section>
    <% end %>
  </figure>
  <figure>
    <figcaption>Search field using <abbr>WAI-ARIA</abbr></figcaption>
    <% html_example do %>
    <form action="" role="search">
      <label for="search">Search</label>
      <input type="search" aria-describedby="search-help">
      <div id="search-help">Search records by customer id or name</div>
      <input type="submit" value="Go">
    </form>
    <% end %>
  </figure>
</div>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**: [<abbr>SC</abbr> 1.3.1 Info and Relationships](/WAI/WCAG20/quickref/#content-structure-separation-programmatic)
* **Tutorial**:
  * [Page Structure](/WAI/tutorials/page-structure/)
  * [Tables](/WAI/tutorials/tables/)
* **Background**: [Understanding <abbr>SC</abbr> 1.3.1 Info and Relationships](/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
* **User Story**: [Describes how structural information helps a screen reader user](/WAI/intro/people-use-web/stories#accountant)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Help users avoid and correct mistakes


Be as forgiving of format as possible when processing user input. For example, accept phone numbers that include spaces and delete the spaces as needed. Clearly identify errors that cannot be auto-corrected. Provide an in-page link for easy access from the error to the field. Work with content writers to agree on content for instructions and messages.

{::nomarkdown}
<%= example :start, :plural %>

<div class="avoid-mistakes">
  <figure>
    <figcaption>Australian phone number field with forgiving validation</figcaption>
    <% html_example do %>
      <label for="phone">Phone:</label>
      <input id="phone" name="phone" type="tel" pattern="^(\(0[1-9]{1}\))?[0-9 -]{8}$" aria-describedby="phone-desc">
      <p id="phone-desc">For example, (02) 1234 1234</p>
    <% end %>
  </figure>
</div>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**: [<abbr>SC</abbr> 3.3.1 Error Identifications](/WAI/WCAG20/quickref/#qr-minimize-error-identified)
* **Tutorial**: [Validating Input](/WAI/tutorials/forms/validation/)
* **Background**: [Understanding <abbr>SC</abbr> 3.3.1 Error Identifications](/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
* **User Story**: [Describes how helpful errors help a user with dyslexia](/WAI/intro/people-use-web/stories#classroomstudent)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Reflect the reading order in the code order

{::nomarkdown}
<%= related_issues 153 %>
{:/}

Ensure that the order of elements in the code matches the logical order of the information when presented visually. One way to check this is to remove <abbr>CSS</abbr> styling and comparing the order of the content with the visual hierarchy of the page.

{::nomarkdown}
<%= example %>

<div class="order">
  <figure>
    <figcaption>Two approaches to coding presentation of a product</figcaption>
    <div>
      <article class="product">
        <h3 class="name">Space trainers</h3>
        <img src="images/trainer.png" alt="Green high top trainer with white laces, empty white dot on outside ankle, and white toe cap">
        <p class="desc">Space trainer for a classic and stylish look.</p>
        <p class="buy"><a href="javascript:return false"><i class="fa fa-cart-plus"></i> Add to cart</a></p>
      </article>
      <div class="two-column">
        <div class="fail">
          <p><b>Code order does not reflect reading order:</b> Order matches visual presentation, but is not logical.</p>
          <% code('html') do %>
<img src="images/trainer.png" alt="...">
<h3>Space trainers</h3>
<p>Space...</p>
<a href="...">Add to cart</a>
          <% end %>
        </div>
        <div class="pass">
          <p><b>Code order reflects reading order:</b> Product title is logically viewed first, so presented first in code.</p>
          <% code('html') do %>
<h3>Space trainers</h3>
<img src="images/trainer.png" alt="...">
<p>Space...</p>
<a href="...">Add to cart</a>
          <% end %>
        </div>
      </div>
    </div>
  </figure>
</div>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**: [<abbr>SC</abbr> 1.3.2 Meaningful Sequence](/WAI/WCAG20/quickref/#qr-minimize-error-identified)
* **How To**: [Order the content in a meaningful sequence](/TR/WCAG-TECHS/G57)
* **Background**: [Understanding <abbr>SC</abbr> 1.3.2 Meaningful Sequence](/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Write code that adapts to user's technology

Use responsive design to adapt the display to different zoom states and viewport sizes, such as on mobile devices and tablets. Avoid clipping and horizontal scrolling when font size is increased. A progressive enhancement approach will help ensure that core functionality and content is available regardless of technology being used.

{::nomarkdown}
<%= example %>

<p>[ ... Consider example for responsive design, and/or resize text ... ]</p>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**:
  * [<abbr>SC</abbr> 1.4.4 Resize text](/WAI/WCAG20/quickref/#visual-audio-contrast-scale)
  * [<abbr>SC</abbr> 3.2.4 Consistent Identification](/WAI/WCAG20/quickref/#consistent-behavior-consistent-functionality)
* **Background**:
  * [Understanding <abbr>SC</abbr> 1.4.4 Resize text](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
  * [Understanding <abbr>SC</abbr> 3.2.4 Consistent Identification](/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html)
  * [Small Screen Size](/TR/mobile-accessibility-mapping/#h-small-screen-size)
* **User Story**: [Describes how alternative views of zoomed pages can be helpful](/WAI/intro/people-use-web/stories#retiree)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Provide meaning for non-standard interactive elements 

Use <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> to provide information on function and state for custom widgets, such as accordions and custom-made buttons. For example, `role='slider'` and `aria-expanded='true'`. Additional code is required to implement the behavior of such widgets, such as pressing interaction.

{::nomarkdown}
<%= example %>

<div class="non-standard">
  <figure>
    <figcaption>Accessible switch control</figcaption>
    <% html_example do %>
      <p id="switch-label">Lights:</p>
      <div id="switch" class="switch" role="checkbox" aria-checked="false" aria-labelledby="switch-label" tabindex="0"><span>Off</span></div>
    </form>
    <% end %>
  </figure>
</div>

<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**: [<abbr>SC</abbr> 4.1.2 Name, Role, Value](/WAI/WCAG20/quickref/#ensure-compat-rsv)
* **Background**: [Understanding <abbr>SC</abbr> 4.1.2 Name, Role, Value](/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)
* **Note**: [Notes on Using ARIA in HTML](/TR/aria-in-html/)  

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Ensure that all interactive elements are keyboard accessible

Think about keyboard access when developing new interactive elements, such as menus, mouseover information, collapsable accordions, or media players. Use `tabindex='0'` to add an element that does not normally receive focus, such as `<div>` or `<span>`, into the navigation order. Use scripting to capture and respond to keyboard events.

{::nomarkdown}
<%= example %>

<div class="keyboard-accessible">
  <figure>
    <figcaption>Accessible menu icon</figcaption>
    <div class="html-example">
      <div class="rendered">
        <p>Rendered:</p>
        <div id="example-button" class="menu-button" role="button" tabindex="0"><i class="fa fa-bars"></i> Menu</div>
        <div id="example-button-menu" class="menu" aria-hidden="true" tabindex="-1">
          <ul>
            <li><a href="javascript:return false">About</a></li>
            <li><a href="javascript:return false">News</a></li>
            <li><a href="javascript:return false">Tickets</a></li>
            <li><a href="javascript:return false">Fun</a></li>
          </ul>
        </div>
      </div>
      <div class="code">
        <p>Code Snippet:</p>
        <% code 'javascript' do %>
var buttonExample = document.getElementById('example-button');

buttonExample.addEventListener('keydown', function(e) {
  // Toggle the menu when SPACE or RETURN are pressed
  if(e.keyCode && (e.keyCode == 32 || e.keyCode == 13)) {
    toggleMenu(document.getElementById('example-button-menu'));
  }
});

buttonExample.addEventListener('click', function(e) {
  toggleMenu(document.getElementById('example-button-menu'));
});
      <% end %>
      </div>
    </div>
  </figure>
</div>

<%= related_issues 143 %>
<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**: [<abbr>SC</abbr> 2.1.1 Keyboard](/WAI/WCAG20/quickref/#keyboard-operation-keyboard-operable)
* **How To**:
  * [Ensure keyboard control for all functionality](/TR/WCAG-TECHS/G202)
  * [Provide keyboard-triggered event handlers](/TR/WCAG-TECHS/G90)
* **Background**: [Understanding <abbr>SC</abbr> 2.1.1 Keyboard](/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)
* **User Story**: [Describes how a user with RSI needs keyboard support](/WAI/intro/people-use-web/stories#reporter)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Avoid CAPTCHA where possible

CAPTCHAs create problems for many people. There are other means of verifying that user input was generated by a human that are easier to use, such as automatic detection or interface interactions. If CAPTCHA really needs to be included, ensure that it is simple to understand and includes alternatives for users with disabilities, such as:

* Providing more than two modalities of CAPTCHAs
* Providing access to a human representative who can bypass CAPTCHA
* Not requiring CAPTCHAs for authorized users. 

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr>WCAG</abbr> Requirement**: [<abbr>SC</abbr> 1.1.1 Non-text Content](/WAI/WCAG20/quickref/#text-equiv-all)
* **Background**:
  * [Understanding <abbr>SC</abbr> 1.1.1 Non-text Content](/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
  * [Note on CAPTCHA](/TR/UNDERSTANDING-WCAG20/text-equiv-all.html#text-equiv-all-8-head)

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

* [<abbr>W3C</abbr> Accessibility](/standards/webdesign/accessibility): Introduces accessibility and provides links to many helpful resources
* [Accessibility Principles](/WAI/intro/people-use-web/principles): An introduction to the <abbr>WCAG</abbr> requirements
* [How people with disabilities use the web](/WAI/intro/people-use-web): Real-life examples of the benefits of accessibility for people with disabilities
* [Web Accessibility Tutorials](/WAI/tutorials/): Shows you how to develop web content that is accessible to people with disabilities
* [Before and After Demonstration](/WAI/demos/bad/): Example accessible and inaccessible websites that share the same visual design, with annotations that highlight key accessibility barriers and repairs, and evaluation reports for <abbr>WCAG</abbr> 2.0
* [Web Accessibility Evaluation Tools List](/WAI/ER/tools/): Provides a range of tools to help explore the accessibility of code


{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
{:/}