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

Progressive enhancement starts with the core semantic <abbr>HTML</abbr> presenting the content and functionality. Additional styling and functionality are then progressively added with different technologies, such as CSS or JavaScript. The core content will still be available when the added technology is not available, such as JavaScript blocked by a firewall.

{::nomarkdown}
<%= learn_more %>
{:/}

* No identified W3C resources

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Adopt a responsive design approach

Use responsive design to adapt different viewport sizes, such as on mobile devices and tablets. Elements can be condensed or rearranged when less space is available. Use <abbr title="Cascading Style Sheet">CSS</abbr> media queries to target styling depending on the width of the viewport. Use `em` or `rem` units in the queries to make sure that the design adapts when changing the font size.

{::nomarkdown}
<%= example %>
{:/}

[... Media query example with corresponding image showing how change might occur ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **User Story**: [Describes how alternative views of zoomed pages can be helpful](/WAI/intro/people-use-web/stories#retiree)

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
<%= example %>
{:/}

[... Example of markup along side a visual design highlighting how different elements relate to design components ...]

[... Consider *simple* table example ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Requirement**: [<abbr title="Success Criteria">SC</abbr> 1.3.1 Info and Relationships](/WAI/WCAG20/quickref/#content-structure-separation-programmatic)
* **Tutorial**:
  * [Page Structure](/WAI/tutorials/page-structure/)
  * [Tables](/WAI/tutorials/tables/)
* **Background**: [Understanding <abbr title="Success Criteria">SC</abbr> 1.3.1 Info and Relationships](/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
* **User Story**: [Describes how structural information helps a screen reader user](/WAI/intro/people-use-web/stories#accountant)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Associate all form elements with labels

Associate the `<label>` element with form elements using the *for* and *id* attributes. Position the `<label>` element offscreen using CSS when the design does not include a visible label. 

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

* **<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Requirement**: [<abbr title="Success Criteria">SC</abbr> 3.3.2 Labels or Instructions](/WAI/WCAG20/quickref/#minimize-error-cues)
* **Tutorial**: [Labelling Controls](/WAI/tutorials/forms/labels/)
* **Background**: [Understanding <abbr title="Success Criteria">SC</abbr> 3.3.2 Labels or Instructions](/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Help users avoid and correct mistakes

Be as forgiving of format as possible when accepting information. For example, accept phone numbers that include spaces and delete the spaces as needed. Clearly identify errors that cannot be auto-corrected. Provide an in-page link for easy access from the error to the field when feasible. 

{::nomarkdown}
<%= example %>
{:/}

[... Simple form with instructions for password requirements or date format ...]

[... Example set of error notifications, maybe different from the Designing? ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Requirement**: [<abbr title="Success Criteria">SC</abbr> 3.3.1 Error Identifications](/WAI/WCAG20/quickref/#qr-minimize-error-identified)
* **Tutorial**: [Validating Input](/WAI/tutorials/forms/validation/)
* **Background**: [Understanding <abbr title="Success Criteria">SC</abbr> 3.3.1 Error Identifications](/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
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

Ensure that the order of elements in the code matches the logical order of the information when presented visually. This can be checked by removing <abbr>CSS</abbr> styling and comparing the order of the content with the visual hierarchy of the page.

{::nomarkdown}
<%= example %>
{:/}

[... Show sample page structure (including header, navigation, main, support panel, and footer.  Then show two samples of general code structure one good, one bad ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Requirement**: [<abbr title="Success Criteria">SC</abbr> 1.3.2 Meaningful Sequence](/WAI/WCAG20/quickref/#qr-minimize-error-identified)
* **How To**: [Order the content in a meaningful sequence](/TR/2014/NOTE-WCAG20-TECHS-20140916/G57)
* **Background**: [Understanding <abbr title="Success Criteria">SC</abbr> 1.3.2 Meaningful Sequence](/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Provide meaning for non-standard interactive elements 

Use <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> to provide information on function and state for custom widgets, such as accordions and custom-made buttons. For example, `role='button'` and `state='pressed'`. Additional code is required to implement the behavior of such widgets, such as pressing interaction.

{::nomarkdown}
<%= example %>
{:/}

[... Example of hamburger menu, list of images as radio select, or collapsable accordion ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Requirement**: [<abbr title="Success Criteria">SC</abbr> 4.1.2 Name, Role, Value](/WAI/WCAG20/quickref/#ensure-compat-rsv)
* **Background**: [Understanding <abbr title="Success Criteria">SC</abbr> 4.1.2 Name, Role, Value](/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Ensure that all interactive elements are keyboard accessible

Think about keyboard access when developing new interactive elements, such as menus, mouseover information, collapsable accordions, or media players. Use `tabindex='0'` to add an element that does not normally receive focus, such as `<div>` or `<span>`, into the navigation order.

{::nomarkdown}
<%= example %>
{:/}

[... **Note:** May be too complex to create an example for ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Requirement**: [<abbr title="Success Criteria">SC</abbr> 2.1.1 Keyboard](/WAI/WCAG20/quickref/#keyboard-operation-keyboard-operable)
* **How To**:
  * [Ensure keyboard control for all functionality](/TR/2014/NOTE-WCAG20-TECHS-20140916/G202)
  * [Provide keyboard-triggered event handlers](/TR/2014/NOTE-WCAG20-TECHS-20140916/G90)
* **Background**: [Understanding <abbr title="Success Criteria">SC</abbr> 2.1.1 Keyboard](/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)
* **User Story**: [Describes how a user with RSI needs keyboard support](/WAI/intro/people-use-web/stories#reporter)

{::nomarkdown}
<%= learn_more :end %>
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

* TBC

{::nomarkdown}
<%= learn_more :end %>
{:/}


{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Ensure compatibility of your code

Make sure your code, especially for web applications, is supported by web browsers and assistive technologies. For example, some HTML5 and WAI-ARIA features might not be supported. Some evaluation tools help you check compatibility.

{::nomarkdown}
<%= learn_more %>
{:/}

* TBC

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Include alternative text for images

Ensure that alternative text for images is added to all informative and functional images. Decorative images should have empty alternative text, `alt=''`, or should be included using <abbr title="Cascading Style Sheet">CSS</abbr>.

{::nomarkdown}
<%= learn_more %>
{:/}

* **<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Requirement**: [<abbr title="Success Criteria">SC</abbr> 1.1.1 Non-text Content](/WAI/WCAG20/quickref/#qr-text-equiv-all)
* **Tutorial**: [Images](/WAI/tutorials/images/)
* **Background**: [Understanding <abbr title="Success Criteria">SC</abbr> 1.1.1 Non-text Content](/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)
* **User Story**: [Describes the value of text alternatives to a blind user](/WAI/intro/people-use-web/stories#accountant)

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Ensure resized text is legible

Specify container size and position, and text size in relative units, such as `em`, `rem`, or percentages. Avoid `overflow: hidden` causing clipping of enlarged text. Create different content flows when font size is increased to avoid horizontal scrolling.

{::nomarkdown}
<%= learn_more %>
{:/}

* TBC

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Ensure that CAPTCHAs have accessible alternatives

Ensure that any CAPTCHA that really needs to be included is simple to understand and includes alternatives for users unable to see and/or hear the test.

{::nomarkdown}
<%= learn_more %>
{:/}

* TBC

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Identify page language and language changes

Provide an indication of language in the `html` tag using the `lang` attribute. Use the `lang` attribute on specific elements when the language of element differs the rest of the page.

{::nomarkdown}
<%= learn_more %>
{:/}

* **How To**: [Declaring language in HTML](/International/questions/qa-html-language-declarations)

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
