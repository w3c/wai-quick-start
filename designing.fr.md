---
title: "Un design accessible – Conseils pour démarrer"
title_html: "Un design accessible"
nav_title: Conseils pour démarrer
ref: /tips/designing/   # Do not change this
permalink: /tips/designing/fr   # add language code  /tips/designing/@@
lang: fr   # change language code
navigation:
  previous: /tips/writing/
  next: /tips/developing/
github:
   repository: w3c/wai-quick-start
   path: '_tips/designing.fr.md'   # add language code designing.@@.md
last_updated: 2020-11-17   # change to date of translation
traducteurs :
- nom : Sofia Ahmed
contributeurs :
- nom : "Sandra vela"

resource:
  ref: /tips/
navigation:
  previous: /tips/writing/
  next:     /tips/developing/

ext_css: tips.css
title_icon: /tips/img/icons.svg#designing

footer: >   # translate text and dates; do not update dates
  <p><strong>Date :</strong> Mise à jour mineure : 9 janvier 2019. Mise à jour : 15 avril 2016. Première publication en septembre 2015.</p>
  <p><strong>Auteurs :</strong> <a href="https://www.w3.org/People/kevin">Kevin White</a>, <a href="https://www.w3.org/People/shadi">Shadi Abou-Zahra</a>, et <a href="https://www.w3.org/People/Shawn">Shawn Lawton Henry</a>. <a href="https://w3c.github.io/wai-website/tips/acknowledgements/">Remerciements</a>.</p>
  <p>Développé par le <a href="https://www.w3.org/WAI/EO/">Groupe de travail Éducation et promotion (EOWG)</a>.
  Développé avec le soutien du <a href="https://www.w3.org/WAI/DEV/">projet WAI-DEV</a>, co-financé par le programme <abbr title="Technologies de la Société de l'information">IST</abbr> de la Commission européenne.</p>

---

{::nomarkdown}
{% include box.html type="start" h="2" title="Résumé" class="full" %}
{:/}

Cette page présente quelques considérations fondamentales à prendre en compte pour démarrer dans la création de design d'interface utilisateur et visuel plus accessible aux personnes en situation de handicap. Ces conseils constituent de bonnes pratiques pour vous aider à satisfaire aux exigences des Règles pour l'accessibilité des contenus Web (WCAG). Retrouvez plus d'informations via les liens vers les recommandations des WCAG correspondantes, les documents intitulés "comprendre" qui comprennent des informations complémentaires détaillées, les tutoriels pour vous accompagner, les témoignages d'utilisateurs, et plus encore.

{::nomarkdown}
{% include box.html type="end" %}
{:/}


{::options toc_levels="2" /}

{::nomarkdown}
{% include_cached toc.html type="start" title="Table des matières" class="full" %}
{:/}

-   TOC is created automatically.
{:toc}

{::nomarkdown}
{% include_cached toc.html type="end" %}
{:/}

## Fournir du contraste en suffisance entre le premier plan et l'arrière-plan

Le texte du premier plan doit offrir un contraste suffisant par rapport aux couleurs de l'arrière-plan. Cela comprend le texte sur les images, les dégradés de couleur d'arrière-plan, les boutons, et d'autres éléments. Cela ne s'applique pas pour les logos, ou le texte accessoire, tel que du texte dans une photographie. Les liens ci-dessous fournissent des informations sur le rapport de contraste minimum tel que recommandé par les et sur comment vérifier le contraste. Le "rapport de contraste" est une version abrégée du terme plus techniquement correct "rapport de contraste de la luminance".

{::nomarkdown}
{% include_cached box.html type="start" title="<strong>Exemple :</strong> Rapport de contraste" class="example" %}
{:/}

<div class="two-column">
  <figure>
    <figcaption>{% include_cached icon.html name="ex-circle" label="Wrong" %} Insuffisant</figcaption>
    <div>
      <p style="color: #999;">Certaines personnes ne peuvent pas lire le texte s'il n'y a pas suffisamment de contraste entre le texte et l'arrière-plan. Pour d'autres, les couleurs lumineuses (à forte luminance) ne sont pas lisibles ; ils ont besoin d'une faible luminance.</p>
    </div>
  </figure>
  <figure>
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Suffisant</figcaption>
    <div>
      <p class="pass">Certaines personnes ne peuvent pas lire le texte s'il n'y a pas suffisamment de contraste entre le texte et l'arrière-plan. Pour d'autres, les couleurs lumineuses (à forte luminance) ne sont pas lisibles ; ils ont besoin d'une faible luminance.</p>
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Contraste (Minimum) 1.4.3](/WAI/WCAG21/quickref/#contrast-minimum) ([Comprendre 1.4.3](/WAI/WCAG21/Understanding/contrast-minimum))
* **Témoignage d'utilisateur**
  * [Comment un utilisateur daltonien utilise le Web](/people-use-web/user-stories/#shopper)
* **Vérification simple**
  * [Comment vérifier le rapport de contraste](/test-evaluate/preliminary/#contrast)
* **Outils d'aide**
  * [Liste des outils d'aide pour déterminer le rapport de contraste](/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#visual-audio-contrast-contrast-resources-head)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## N'utilisez pas seulement la couleur pour véhiculer des informations

Bien que la couleur peut servir à véhiculer des informations, elle ne devrait pas être le seul moyen de communiquer ces informations. Lorsque vous utilisez la couleur pour différencier les éléments, fournissez également des éléments d'identification supplémentaires autres que la couleur. Par exemple, utilisez un astérisque en plus de la couleur pour indiquer les champs de formulaire obligatoires, et utilisez des étiquettes pour distinguer les zones sur les graphiques.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : utilisation de la couleur pour transmettre un message" class="example" %}
{:/}

<div class="color-alone two-column">
  <figure class="reference fail">
    <figcaption>{% include_cached icon.html name="ex-circle" label="Wrong" %} De la couleur uniquement</figcaption>
    <div>
      <form action="#" method="post">
        <p class="instruction"><span class="required" style="color: #992929;">Les champs obligatoires sont en rouge</span></p>
        <div class="row">
          <label for="name1">Nom</label> <input type="text" id="name1" name="name">
        </div>
        <div class="row">
          <label class="required" style="color: #992929;" for="email1">E-mail</label> <input type="text" id="email1" name="email">
        </div>
      </form>
    </div>
  </figure>
  <figure class="reference pass">
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} De la couleur et des symboles</figcaption>
    <div>
      <form action="#" method="post">
        <p class="instruction"><span class="required" style="color: #992929;">Les champs obligatoires</span> sont en rouge et indiqués par un <span class="required" style="color: #992929;">*</span></p>
        <div class="row">
          <label for="name2">Nom</label> <input type="text" id="name2" name="name"><br>
        </div>
        <div class="row">
          <label class="required" style="color: #992929;" for="email2">E-mail *</label> <input type="text" id="email2" name="email">
        </div>
      </form>
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : faire référence à des informations en utilisant uniquement de la couleur" class="example" %}
{:/}
<div class="color-alone two-column">
  <figure class="question fail">
    <figcaption>{% include_cached icon.html name="ex-circle" label="Wrong" %} De la couleur uniquement</figcaption>
    <div>
      <svg version="1.1" width="153" height="154" aria-labelledby="inaccessible-triangles-title" role="img">
        <g>
          <title id="inaccessible-triangles-title">Four triangles with different angles</title>
          <path d="m2.06902,49.92402l91.82715,-48.2264l-42.35869,75.85164l-49.46846,-27.62524z" fill="#09610D"/>
          <path d="m147.18413,95.39555l-41.64554,-80.62148l43.24728,27.76369l-1.60175,52.85779z" fill="#0000CC"/>
          <path d="m110.9136,148.01692l-27.57392,-82.3039l69.97661,50.70448l-42.40269,31.59943z" fill="#AA0402"/>
          <path d="m21.07534,112.17733l48.69831,-22.53485l-4.90304,52.17411l-43.79528,-29.63926z" fill="#DDDD00"/>
        </g>
      </svg>
      <form action="#" method="post">
        <fieldset>
          <legend style="width: 100%;">Lequel de ces triangles est un triangle rectangle ?</legend>
          <input id="answer-green1" name="answer1" value="green" type="radio"> <label for="answer-green1">Vert</label><br>
          <input id="answer-blue1" name="answer1" value="blue" type="radio"> <label for="answer-blue1">Bleu</label><br>
          <input id="answer-red1" name="answer1" value="red" type="radio"> <label for="answer-red1">Rouge</label><br>
          <input id="answer-yellow1" name="answer1" value="yellow" type="radio"> <label for="answer-yellow1">Jaune</label><br>
          <input id="answer-pass1" name="answer1" value="pass" type="radio"> <label for="answer-pass1">Je ne sais pas</label>
        </fieldset>
      </form>
    </div>
  </figure>
  <figure class="question pass">
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} De la couleur et des nombres</figcaption>
    <div>
      <svg version="1.1" width="153" height="154">
        <g>
          <path d="m2.06902,49.92402l91.82715,-48.2264l-42.35869,75.85164l-49.46846,-27.62524z" fill="#09610D" />
          <text fill="#f4f4f4" y="51" x="44"><tspan>1</tspan><tspan dx="100" style="opacity:0">Green triangle: Angles are 30°, 60°, 90°</tspan></text>
          <path d="m147.18413,95.39555l-41.64554,-80.62148l43.24728,27.76369l-1.60175,52.85779z" fill="#0000CC"/>
          <text fill="#f4f4f4" y="54" x="132"><tspan>2</tspan><tspan dx="100" style="opacity:0"> Blue triangle: Angles are 30°, 30°, 120°</tspan></text>
          <path d="m110.9136,148.01692l-27.57392,-82.3039l69.97661,50.70448l-42.40269,31.59943z" fill="#AA0402"/>
          <text fill="#f4f4f4" y="114" x="110"><tspan>3</tspan><tspan dx="100" style="opacity:0"> Red triangle: Angles are 30°, 60°, 90°</tspan></text>
          <path d="m21.07534,112.17733l48.69831,-22.53485l-4.90304,52.17411l-43.79528,-29.63926z" fill="#DDDD00"/>
          <text fill="#333" y="118" x="48"><tspan>4</tspan><tspan dx="100" style="opacity:0"> Yellow triangle: Angles are 40°, 70°, 70°</tspan></text>
        </g>
      </svg>
      <form action="#" method="post">
        <fieldset>
          <legend style="width: 100%;">Which is the right-angled triangle?</legend>
          <input id="answer-green2" name="answer2" value="green" type="radio"> <label for="answer-green2">Vert (1)</label><br>
          <input id="answer-blue2" name="answer2" value="blue" type="radio"> <label for="answer-blue2">Bleu (2)</label><br>
          <input id="answer-red2" name="answer2" value="red" type="radio"> <label for="answer-red2">Rouge (3)</label><br>
          <input id="answer-yellow2" name="answer2" value="yellow" type="radio"> <label for="answer-yellow2">Jaune (4)</label><br>
          <input id="answer-pass2" name="answer2" value="pass" type="radio"> <label for="answer-pass2">Je ne sais pas</label>
        </fieldset>
      </form>
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Utilisation de la couleur 1.4.1](/WAI/WCAG21/quickref/#use-of-color) ([Comprendre 1.4.1](/WAI/WCAG21/Understanding/use-of-color))
* **Témoignage d'utilisateur**
  * [Comment un utilisateur daltonien utilise le Web](/people-use-web/user-stories/#shopper)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}


## Assurez-vous que les éléments interactifs sont facilement identifiables

Fournissez des styles différents pour les éléments interactifs, tels que les liens et les boutons, pour les rendre facile à identifier. Par exemple, modifiez l'apparence des liens lors du passage de la souris, des focus clavier, et de l'activation de l'écran tactile. Assurez-vous que les styles et l'intitulé des éléments interactifs sont cohérents partout sur le site.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : des styles uniques pour différents états du lien" class="example" %}
{:/}

<div class="focus two-column">
  <div>
    <figure>
      <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Style pour faire ressortir les liens du texte</figcaption>
      <div>
        <p>Certaines personnes ne peuvent pas utiliser une souris et utilisent uniquement un <a href="javascript:return false;" aria-label="Link is styled to stand out from main text">clavier pour naviguer</a> au sein des pages Web.</p>
        <p>Il est important que les utilisateurs puissent avoir accès à tous les éléments interactifs au clavier, et qu'il soit clairement indiqué sur quel élément le focus se trouve.</p>
        <p>Un focus de clavier visible serait, par exemple, une bordure ou une surbrillance qui se déplace et fur et à mesure que vous naviguez sur la page.</p>
      </div>
    </figure>
  </div>
  <div>
    <figure class="hover">
      <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Style lié au passage de la souris</figcaption>
      <div>
        <p style="text-align: center; position:relative;"><a href="javascript:return false;" aria-label="Link is styled with a subtle background to highlight hover state" style="color: #850BAC; background-color: rgba(253, 247, 15, 0.3)">Clavier pour naviguer</a><img src="../img/pointer.png" style="position: absolute; left: 50%; top:1em;" width="20" alt=""></p>
      </div>
    </figure>
    <figure class="keyboard">
      <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Style lié au focus du clavier</figcaption>
      <div>
        <p style="text-align: center; position:relative;"><a href="javascript:return false;" aria-label="Link is styled with a stronger version of the hover style to make it stand out" style="color: #850BAC; background-color: #fdf70f">clavier pour naviguer</a></p>
      </div>
    </figure>
    <figure class="active">
      <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Style lié à la sélection</figcaption>
      <div>
        <p style="text-align: center; position:relative;"><a href="javascript:return false;" aria-label="Link is given a strong styling to show an action will occur" style="background: #850BAC; color: #f4f4f4">Clavier pour naviguer</a><img src="../img/pointer.png" style="position: absolute; left: 50%; top:1em;" width="20" alt=""></p>
      </div>
    </figure>
  </div>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Visibilité du focus 2.4.7](/WAI/WCAG21/quickref/#focus-visible) ([Comprendre 2.4.7](/WAI/WCAG21/Understanding/focus-visible))
  * [Identification cohérente 3.2.4](/WAI/WCAG21/quickref/#consistent-identification) ([Comprendre 3.2.4](/WAI/WCAG21/Understanding/consistent-identification))
* **Témoignages d'utilisateurs**
  * [Obstacles rencontrés par une personne ayant une capacité limitée à utiliser une souris](/people-use-web/user-stories/#reporter)
  * [Obstacles rencontrés par un utilisateur plus âgé dont les mains tremblent](/people-use-web/user-stories/#retiree)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Fournissez des options de navigation claires et cohérentes

Veillez à ce que le nom, le style et le positionnement de la navigation dans les pages de votre site Web soient cohérents. Fournissez plusieurs modes de navigation dans le site Web, tels qu'une option de recherche au sein du site ou un plan du site. Aidez les utilisateurs à comprendre où ils se trouvent sur le site ou la page en fournissant des indices d'orientation, comme des fils d'Ariane et des titres clairs.

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Navigation cohérente 3.2.3](/WAI/WCAG21/quickref/#consistent-navigation) ([Comprendre 3.2.3](/WAI/WCAG21/Understanding/consistent-identification))
  * [Accès multiples 2.4.5](/WAI/WCAG21/quickref/#multiple-ways) ([Comprendre 2.4.5](/WAI/WCAG21/Understanding/multiple-ways))
* **Témoignage d'utilisateur**
  * [Comment la cohérence et la navigtion peuvent aider une personne souffrant de troubles cognitifs](/people-use-web/user-stories/#supermarketassistant)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Assurez-vous que les éléments de formulaire comprennent des étiquettes clairement associées

Veillez à ce que tous les champs aient une étiquette descriptive adjacente au champ. Pour les langues qui se lisent de gauche à droite, les étiquettes se situent généralement à gauche ou en haut du champ, sauf pour les cases à cocher et les boutons radio où ils s'écrivent à droite. Évitez les espaces trop importants entre les étiquettes et les champs.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : les étiquettes et les champs de saisie associés grâce à la proximité" class="example" icon="check-circle" %}
{:/}

<div class="labels">
  <figure>
    <div>
      <form action="#" method="post">
        <fieldset>
          <legend>Ajouter un commentaire</legend>
          <div class="row">
            <label for="email4">Votre e-mail</label>
            <input type="text" id="email4" name="email">
          </div>
          <div class="row checkbox">
            <input type="checkbox" id="contact1" name="contact">
            <label for="contact1">Je serais ravi que vous me contactiez</label>
          </div>
          <div class="row">
            <label for="website2">Votre site Web</label>
            <input type="text" id="website2" name="website">
          </div>
          <div class="row">
            <label for="comment2">Commentaire</label>
            <textarea name="comment" id="comment2"></textarea>
          </div>
        </fieldset>
      </form>
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Étiquettes ou instructions 3.3.2](/WAI/WCAG21/quickref/#labels-or-instructions) ([Comprendre 3.3.2](/WAI/WCAG21/Understanding/labels-or-instructions))
  * [En-têtes et étiquettes 2.4.6](/WAI/WCAG21/quickref/#headings-and-labels) ([Comprendre 2.4.6](/WAI/WCAG21/Understanding/headings-and-labels))
* **Tutoriel**
  * [Position visuelle du texte de l'étiquette](/WAI/tutorials/forms/labels/#visual-position-of-label-text)
* **Témoignage d'utilisateur**
  * [Comment une étiquette claire peut aider une personne souffrant de troubles cognitifs](/people-use-web/user-stories/#supermarketassistant)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Fournissez un feedback facilement identifiable

Fournissez un feedback pour les interactions, tel que la confirmation de la soumission d'un formulaire, avertir l'utilisateur en cas de problème, ou informer l'utilisateur des modifications survenues sur une page. Les instructions doivent être faciles à identifier. Un feedback important nécessitant l'action de l'utilisateur doit s'afficher dans un style bien visible.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : utiliser une liste d'erreurs, des icônes, et des couleurs d'arrière-plan pour faire ressortir les erreurs" class="example" icon="check-circle" %}
{:/}

<div class="errors">
  <figure>
    <div>
      <div class="error-list">
        <p>Veuillez corriger les erreurs suivantes :</p>
        <ol>
          <li id="error_email">{% include_cached icon.html name="warning" label="Error" %} <a href="javascript:document.getElementById('email5').focus()">Adresse e-mail invalide</a></li>
          <li id="error_comment">{% include_cached icon.html name="warning" label="Error" %} <a href="javascript:document.getElementById('comment3').focus()">A Commentaire obligatoire</a></li>
        </ol>
      </div>
      <form action="#" method="post">
        <fieldset>
          <legend>Ajouter un commentaire</legend>
          <p class="instruction"><span class="required">Les champs obligatoires</span> sont en rouge et indiqué par un <span class="required">*</span></p>
          <div class="row">
            <label for="name5">Nom</label>
            <input type="text" id="name5" name="name" value="Superbear">
          </div>
          <div class="row error">
            <label class="required" for="email5">{% include_cached icon.html name="warning" label="Error" %} E-mail *</label>
            <input type="text" id="email5" name="email" value="superbear@@hq.exemple.com" aria-invalid="true" aria-describedby="error_email">
          </div>
          <div class="row">
            <label for="website3">Site Web</label>
            <input type="text" id="website3" name="website">
          </div>
          <div class="row error">
            <label class="required" for="comment3">{% include_cached icon.html name="warning" label="Error" %} Commentaire *</label>
            <textarea name="comment" id="comment3" aria-invalid="true" aria-describedby="error_comment"></textarea>
          </div>
        </fieldset>
      </form>
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Identification des erreurs 3.3.1](/WAI/WCAG21/quickref/#error-identification) ([Comprendre 3.3.1](/WAI/WCAG21/Understanding/error-identification))
  * [Étiquettes et instructions 3.3.2](/WAI/WCAG21/quickref/#labels-or-instructions) ([Comprendre 3.3.2](/WAI/WCAG21/Understanding/labels-or-instructions))
  * [Suggestion après des erreurs 3.3.3](/WAI/WCAG21/quickref/#error-suggestion) ([Comprendre 3.3.3](/WAI/WCAG21/Understanding/error-suggestion))
* **Tutoriel**
  * [Informer l'utilisateur](/WAI/tutorials/forms/notifications/)
* **Témoignage d'utilisateur**
  * [Comment un contenu important facilement identifiable peut aider](/people-use-web/user-stories/#classroomstudent)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Utilisez des titres et des interlignes pour regrouper les contenus relatifs

Utilisez des blancs et la proximité pour faire ressortir les relations entre les différents contenus. Appliquez des styles aux titres pour regrouper les contenus, mieux les organiser, et en faciliter la lecture et la compréhension.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : l'espacement met en exergue la relation entre les contenus" class="example" %}
{:/}

<div class="headings two-column">
  <figure class="fail">
    <figcaption id="inaccessible-headings-title">{% include_cached icon.html name="ex-circle" label="Wrong" %} Peu d'espacements et des relations peu claires</figcaption>
    <div>
      <svg version="1.1" height="173" aria-labelledby="inaccessible-headings-title" aria-describedby="inaccessible-headings-desc" role="img">
        <g>
          <desc id="inaccessible-headings-desc">Single heading with large blocks of text, poor separation of sub-headings, and unclear image relationship</desc>
          <text class="heading" x="0" y="14">Titre principal</text>
          <rect x="0" y="18" width="247" height="3"/>
          <rect x="0" y="24" width="244" height="3"/>
          <rect x="0" y="30" width="249" height="3"/>
          <rect class="image" x="180" y="36" width="70" height="55"/>
          <line x1="181" y1="37" x2="249" y2="90" stroke-width="1"/>
          <line x1="181" y1="90" x2="249" y2="37" stroke-width="1"/>
          <rect x="0" y="36" width="168" height="3"/>
          <rect x="0" y="42" width="171" height="3"/>
          <rect x="0" y="48" width="166" height="3"/>
          <rect x="0" y="54" width="172" height="3"/>
          <rect x="0" y="60" width="120" height="3"/>
          <text class="sub-heading" x="0" y="74">Sous-titre</text>
          <rect x="0" y="76" width="144" height="3"/>
          <rect x="0" y="82" width="136" height="3"/>
          <rect x="0" y="88" width="142" height="3"/>
          <rect x="0" y="94" width="236" height="3"/>
          <rect x="0" y="100" width="249" height="3"/>
          <rect x="0" y="106" width="239" height="3"/>
          <rect x="0" y="112" width="205" height="3"/>
          <text class="sub-heading" x="0" y="126">Sous-titre</text>
          <rect x="0" y="128" width="236" height="3"/>
          <rect x="0" y="134" width="242" height="3"/>
          <rect x="0" y="140" width="243" height="3"/>
          <rect x="0" y="146" width="250" height="3"/>
          <rect x="0" y="152" width="245" height="3"/>
          <rect x="0" y="158" width="187" height="3"/>
        </g>
      </svg>
    </div>
  </figure>
  <figure class="pass">
    <figcaption id="accessible-headings-title">{% include_cached icon.html name="check-circle" label="OK" %} Plus d'espacement et des relations plus claires</figcaption>
    <div>
      <svg version="1.1" height="173" aria-labelledby="accessible-headings-title" aria-describedby="accessible-headings-desc" role="img">
        <g>
          <desc id="accessible-headings-desc">Main heading, multiple sub headings, lists, and no large text blocks</desc>
          <text class="heading" x="0" y="14">Titre principal</text>
          <rect x="0" y="21" width="175" height="3"/>
          <rect x="0" y="27" width="170" height="3"/>
          <rect x="0" y="33" width="159" height="3"/>
          <rect x="0" y="39" width="95" height="3"/>
          <rect x="0" y="51" width="175" height="3"/>
          <rect x="0" y="57" width="170" height="3"/>
          <rect x="0" y="63" width="159" height="3"/>
          <rect x="0" y="69" width="172" height="3"/>
          <rect x="0" y="75" width="143" height="3"/>
          <rect class="image" x="180" y="21" width="70" height="55"/>
          <line x1="181" y1="22" x2="249" y2="75"/>
          <line x1="181" y1="75" x2="249" y2="22"/>
          <text class="sub-heading" x="0" y="98">Sous-titre</text>
          <rect x="0" y="103" width="106" height="3"/>
          <rect x="0" y="109" width="99" height="3"/>
          <rect x="0" y="115" width="114" height="3"/>
          <rect x="0" y="121" width="110" height="3"/>
          <rect x="0" y="127" width="110" height="3"/>
          <rect x="0" y="139" width="99" height="3"/>
          <rect x="0" y="145" width="114" height="3"/>
          <rect x="0" y="151" width="110" height="3"/>
          <rect x="0" y="157" width="84" height="3"/>
          <text class="sub-heading" x="135" y="98">Sous-titre</text>
          <rect x="135" y="103" width="106" height="3"/>
          <rect x="135" y="109" width="99" height="3"/>
          <rect x="135" y="115" width="114" height="3"/>
          <rect x="135" y="127" width="114" height="3"/>
          <rect x="135" y="133" width="110" height="3"/>
          <rect x="135" y="139" width="99" height="3"/>
          <rect x="135" y="145" width="108" height="3"/>
          <rect x="135" y="151" width="110" height="3"/>
          <rect x="135" y="157" width="62" height="3"/>
        </g>
      </svg>
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [En-têtes et étiquettes 2.4.6](/WAI/WCAG21/quickref/#headings-and-labels) ([Comprendre 2.4.6](/WAI/WCAG21/Understanding/headings-and-labels))
  * [En-têtes de section 2.4.10](/WAI/WCAG21/quickref/#section-headings) ([Comprendre 2.4.10](/WAI/WCAG21/Understanding/section-headings))
* **Tutoriel**
  * [En-têtes](/WAI/tutorials/page-structure/headings/)
* **Témoignage d'utilisateur**
  * [Décrit de quelle manière les en-têtes peuvent être utiles à la navigation](/people-use-web/user-stories/#accountant)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Créez des designs pour différentes tailles de fenêtres d'affichage

Prêtez attention à l'agencement des informations contenues dans les pages dans des fenêtres de tailles différentes, tels que les téléphones mobiles ou des fenêtres de navigateur agrandies. La position et la présentation des éléments principaux, tels que les en-têtes et la navigation, peuvent être modifiés pour mieux utiliser l'espace. Veillez à ce que la taille du texte et la largeur des lignes soient définies de manière à optimiser la lisibilité et la clarté.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : le contenu et la navigation s'adaptent aux écrans plus petits des téléphones portables" class="example" %}
{:/}

<div class="responsive">
  <figure>
    <div>
      {% include_cached img.html src="content_in_browser.png" %}
      {% include_cached img.html src="content_in_phone.png" %}
      <p>L'affichage dans une fenêtre plus large avec un texte de petite taille utilise plusieurs colonnes pour le contenu principal, des options de navigation visibles, et des informations secondaires visibles.</p>
      <p>L'affichage dans une petite fenêtre, telle qu'un téléphone portable, ou avec un texte en gros caractères utilise une seule colonne pour le contenu principal, les options de navigation sont représentées par un icône, et les informations secondaires sont également représentées par un icône.</p>
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **Arrière-plan**
  * [Petite taille d'écran](/TR/mobile-accessibility-mapping/#h-small-screen-size)
  * [Considérations en matière de téléphone mobile relatives à la compréhension](/TR/mobile-accessibility-mapping/#mobile-accessibility-considerations-related-primarily-to-principle-3-understandable)
* **Témoignage d'utilisateur**
  * [Décrit de quelle manière les vues équivalentes des pages agrandies peuvent être utiles](/people-use-web/user-stories/#retiree)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Incluez des contenus multimédia et des images équivalents dans votre design

Prévoyez une zone dans votre design pour inclure des contenus multimédia et des images équivalents. Par exemple, vous pourriez avoir besoin :

* Des liens visibles vers les transcriptions de l'audio
* Des liens visibles vers les versions des vidéos avec audiodescription
* De texte ainsi que des icônes et des boutons graphiques
* Des sous-titres et des descriptions pour les tableaux ou les graphiques complexes

Travaillez avec les auteurs et les développeurs du contenu pour fournir des équivalents pour le contenu non textuel.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : le design comprend des liens vers une transcription et une vidéo avec audiodescription" class="example" %}
{:/}

<div class="text-alt">
  <figure>
    <div>
      {% include_cached img.html src="example_media_player.png" alt="A media player is shown. In additon to the standard play/pause buttons, progress bar and volume, a closed captions (CC) button is available as well as links to a transcript and a version with audio description." %}
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Contenu non textuel 1.1.1](/WAI/WCAG21/quickref/#non-text-content) ([Comprendre 1.1.1](/WAI/WCAG21/Understanding/non-text-content))
* **Tutoriel**
  * [Images](/WAI/tutorials/images/)
* **Témoignage d'utilisateur**
  * [Décrit l'importance des équivalents textuels pour un utilisateur aveugle](/people-use-web/user-stories/#accountant)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Fournissez des boutons de commande pour le contenu qui démarre automatiquement

Fournissez des boutons de commande visibles pour permettre aux utilisateurs d'arrêter toute animation ou tout son qui démarre automatiquement. Cela s'applique aux carrousels, aux diaporamas d'images, au son de fond, et aux vidéos.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : afficher les boutons de commande de démarrage, d'arrêt, et de sélection dans le design du carrousel." class="example" %}
{:/}

<div class="autoplay">
  <figure>
    <div>
      {% include_cached img.html src="carousel_controls.png" alt="Example of carousel with play and slide selection controls" %}
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Contrôle du son 1.4.2](/WAI/WCAG21/quickref/#audio-control) ([Comprendre 1.4.2](/WAI/WCAG21/Understanding/audio-control))
  * [Mettre en pause, arrêter, masquer 2.2.2](/WAI/WCAG21/quickref/#pause-stop-hide) ([Comprendre 2.2.2](/WAI/WCAG21/Understanding/pause-stop-hide))
* **Tutoriel**
  * [Conceptions d'un carrousel](/WAI/tutorials/carousels/)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="En savoir plus sur l'accessibilité" class="large" icon="readmore" %}
{:/}

Ces conseils sont quelques-uns des éléments à prendre en compte pour l'accessibilité Web. Les ressources suivantes vous aident à comprendre l'importance de l'accessibilité, et à prendre connaissance des recommandations pour rendre le Web plus accessible pour les personnes handicapées.

* [Introduction à l'accessibilité Web](https://www.w3.org/WAI/fundamentals/accessibility-intro/) — concerne des questions générales, telles que les cas d'affaire, et les liens vers des ressources utiles
* [Principes d'accessibilité](/WAI/intro/people-use-web/principles) — présente les concepts liés aux recommandations en matière d'accessibilité Web
* [Comment les personnes handicapées utilisent le Web](/WAI/intro/people-use-web) — examine les effets d'un design accessible à l'aide d'exemples concrets
* [Tutoriels sur l'accessibilité Web](/WAI/tutorials/) — comprend des recommandations relatives au design, par exemple, [fournir un équivalent textuel pour les images](/WAI/tutorials/images/)
* [Démonstration avant/après](/WAI/demos/bad/) — montre une version accessible et inaccessible d'un même site Web, et des commentaires sur les obstacles à l'accessibilité et les moyens pour les éviter
* [Comment satisfaire aux WCAG (Référence rapide)](/WAI/WCAG21/quickref/) — liste personnalisable de références rapides qui contient toutes les règles et les techniques des WCAG
* [Liste d'outils d'évaluation de l'accessibilité Web](/WAI/ER/tools/) — comprend des outils pour en savoir plus sur le rapport de contraste

{::nomarkdown}
{% include box.html type="end" %}
{:/}
