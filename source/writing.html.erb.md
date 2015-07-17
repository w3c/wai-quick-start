---
title: Tips on Writing for Web Accessibility
status: editors-draft
icon: pencil
layout: guide
---

These introductory tips cover the basics of writing web accessible content.


{:.toc .no_toc}
## On this page

{:toc .toc}
* Will be replaced with the ToC

{::nomarkdown}
<%= tip %>
{:/}

{:.attach_permalink}
##  Keep content clear and concise 

Write in short, clear sentences and paragraphs, as appropriate for the context. Front-load important messages. Split complex prose into a few short sentences. Try and keep paragraphs to a single idea.
 
{::nomarkdown}
<%= example %>

<div class="two-column">
  <figure>
    <figcaption>Complex text</figcaption>
    <div>
      <p class="fail">In the event of a vehicular collision, a company assigned representative will seek to ascertain the extent and cause of damages to property belonging to the parties involved. Once we obtain information that causes us to understand the causality, we will assign monetary remuneration accordingly.</p>
    </div>
  </figure>
  <figure>
    <figcaption>Clear and simple text</figcaption>
    <div>
      <p class="pass">If our client is involved in a car accident, an agent will investigate. Those findings will determine the payment of claims.</p>
    </div>
  </figure>
</div>

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}

## Know your audience and write for them

If you are writing to the general public, it's useful to use language that is very basic and not overly complex. If the writing is geared toward readers of a particular niche, then ensure complex language, words, or phrases is clearly defined on the first use. It is also helpful to reiterate the definition for such language when it is re-introduced after having been unused within the document you are authoring. 

**Example Here**

{:.attach_permalink}

## Provide meaningful link text

Try to write link text so that it would make sense out of context. Link text should describe the content of the link target in a meaningful way. Avoid using link text such as 'click here', 'find out more', or 'read more'. Where the link target is not HTML, indicate the document type and approximate size in the link text.

{::nomarkdown}
<%= example %>
{:/}

[... Example of links in context, one with no out of context meaning, one clear out of context ...]

[... Example of 'click here' in sentence, contrasted with contextually meaningful link ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Provide headings to structure text

Use clear and simple headings to split up text into manageable chunks. Headings should be short and aim to describe or introduce the following section. They should clarify what the following section is about.  

{::nomarkdown}
<%= example %>
{:/}

[... Example of block of text with and without headings to provide clarity and structure ...]

[... May be too long for an example, perhaps examples of using metaphor, or quirky headings ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Use informative and unique page titles

Provide unique titles to each page that simply describes page content and distinguishes it from other pages. Consider including the stage within the title for pages that are part of a group, such as a multi-step process.

{::nomarkdown}
<%= example %>
{:/}

[... Example of simple title, page title and site title together, and title as part of process ...]

{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Provide text alternatives for images

Assign alternative text to every image. Text must clearly describe the information or function represented by the image. Where an image is purely decorative, use empty alternative text.

{::nomarkdown}
<%= example %>
{:/}

[... Some examples of images with appropriate alternative text ...]

[... Probably worth using a couple of examples from the tutorials and then linking directly there ...]
{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}
## Provide transcripts and captions for multimedia content

For audio-only content, such a podcast, provide transcripts. Include everything that is spoken, and descriptions of sounds that are important for understanding the content; for example 'squeaking door'. Provide this information, including the audio description, as captions when audio is used to accompany visual content, such as animations and video. The requirements vary for pre-recorded and live content.

{::nomarkdown}
<%= example %>
{:/}

[... Could include a link to a video with captions and the associated captions file. Could show a video and then include a transcript below. Both may be quite involved... ]
{::nomarkdown}
<%= example :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
<%= tip %>
{:/}

{:.attach_permalink}

## Learn more about accessibility

These tips are important points to consider when writing accessible content, but there is always more to learn. The following resources will help you find out more about accessibility, why it is important, and what guidelines exist to help support people with disabilities accessing the web.

{::nomarkdown}
<%= learn_more %>
{:/}

* [<abbr title="World Wide Web Consortium">W3C</abbr> Accessibility](/standards/webdesign/accessibility): Introduces accessibility and provides links to many helpful resources
* [Accessibility Principles](/WAI/intro/people-use-web/principles): An introduction to the <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> requirements
* [How people with disabilities use the web](/WAI/intro/people-use-web): Real-life examples of the benefits of accessibility for people with disabilities
* [Web Accessibility Evaluation Tools List](/WAI/ER/tools/): Includes tools to help explore readability of content

{::nomarkdown}
<%= learn_more :end %>
{:/}

{::nomarkdown}
<%= tip :end %>
{:/}
