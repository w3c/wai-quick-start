---
title: "Une conception accessible – Conseils pour démarrer"
title_html: "Une conception accessible"
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
- nom : "Sofia Ahmed"
contributeurs :
- nom : "Sandra Velarde Gonzalez"

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
  <p>Développé par le <a href="https://www.w3.org/WAI/EO/">Groupe de travail Éducation et Promotion (EOWG)</a>.
  Développé avec le soutien du <a href="https://www.w3.org/WAI/DEV/">projet WAI-DEV</a>, co-financé par le programme <abbr title="Technologies de la Société de l'information">IST</abbr> de la Commission européenne.</p>

---

{::nomarkdown}
{% include box.html type="start" h="2" title="Résumé" class="full" %}
{:/}

Cette page présente quelques considérations fondamentales à prendre en compte pour démarrer dans la création de conception d'interface utilisateur et visuel plus accessible aux personnes en situation de handicap. Ces conseils constituent de bonnes pratiques pour vous aider à satisfaire aux exigences des Règles pour l'accessibilité des contenus Web (WCAG). Retrouvez plus d'informations via les liens vers les recommandations des WCAG correspondantes, les documents intitulés "comprendre" qui comprennent des informations complémentaires détaillées, les tutoriels pour vous accompagner, les témoignages d'utilisateurs, et plus encore.

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

Le texte du premier plan doit offrir un contraste suffisant par rapport aux couleurs de l'arrière-plan. Cela comprend le texte sur les images, les dégradés de couleur d'arrière-plan, les boutons, et d'autres éléments. Cela ne s'applique pas pour les logos, ou le texte accessoire, tel que du texte dans une photographie. Les liens ci-dessous fournissent des informations sur le rapport de contraste minimum tel que recommandé par les et sur comment vérifier le contraste. Le "rapport de contraste" est une version abrégée du terme plus techniquement correct "rapport de contraste de luminance".

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
{% include_cached box.html type="end" %}---
title: "Le développement pour l'accessibilité Web – Conseils pour démarrer"
title_html: "Le développement pour l'accessibilité Web"
nav_title: Conseils pour démarrer
ref: /tips/developing/   # Do not change this
permalink: /tips/developing/fr  # add language code  /tips/developing/@@
lang: fr   # change language code
navigation:
  previous: /tips/designing/
#  next: /tips/…/
github:
   repository: w3c/wai-quick-start
   path: '_tips/developing.fr.md'   # add language code developing.@@.md
last_updated: 2020-11-18   # change to date of translation
# translators:
Translators:
-name: Sofia Ahmed
# - name: "Your Name"
# contributors:
# - name: "Other Name"

resource:
  ref: /tips/
navigation:
  previous: /tips/designing/

ext_css: tips.css
title_icon: /tips/img/icons.svg#developing

footer: >   # translate text and dates; do not update dates
  <p><strong>Date :</strong> Mise à jour mineure : 9 janvier 2019. Mise à jour : 15 avril 2016. Première publication en septembre 2015.</p>
  <p><strong>Auteurs :</strong> <a href="https://www.w3.org/People/kevin">Kevin White</a>, <a href="https://www.w3.org/People/shadi">Shadi Abou-Zahra</a>, et <a href="https://www.w3.org/People/Shawn">Shawn Lawton Henry</a>. <a href="https://w3c.github.io/wai-website/tips/acknowledgements/">Remerciements</a>.</p>
  <p>Développé par le <a href="https://www.w3.org/WAI/EO/">Groupe de travail Éducation et promotion (EOWG)</a>.
  Développé avec le soutien du <a href="https://www.w3.org/WAI/DEV/">projet WAI-DEV</a>, co-financé par le programme <abbr title="Technologies de la Société de l'information">IST</abbr> de la Commission européenne.</p>

---

{::nomarkdown}
{% include box.html type="start" h="2" title="Résumé" class="full" %}
{:/}

Cette page présente certaines considérations fondamentales pour vous aider à démarrer dans le développement de contenu Web plus accessible aux personnes en situation de handicap. Ces conseils sont de bonnes pratiques pour vous aider à satisfaire aux exigences des Règles pour l'accessibilité des contenus Web (WCAG). Retrouvez plus d'informations via les liens vers les recommandations des WCAG correspondantes, les documents intitulés "Comprendre" qui comprennent des informations complémentaires détaillées, les tutoriels pour vous accompagner, les témoignages d'utilisateurs, et plus encore.

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



## Associez une étiquette à chaque commande d'un formulaire

Utilisez un attribut `for` sur l'élément `<label>` relatif à l'attribut `id` de l'élément de formulaire, ou utilisez les attributs <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>. Dans certaines situations particulières, il serait acceptable de masquer visuellement les éléments `<label>`, mais la plupart du temps, les étiquettes sont nécessaires pour permettre à tous les lecteurs de comprendre la saisie obligatoire.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : utiliser les attributs <code>for</code> et <code>id</code>" class="example" %}

<div class="two-column">
<figure>
<figcaption>{% include_cached icon.html name="desktop" %} Rendu</figcaption>
<label for="username">Nom d'utilisateur</label>
<input id="username" type="text" name="username">
</figure>
<figure>
<figcaption>{% include_cached icon.html name="code" %} Extrait de code</figcaption>
{:/}

~~~html
<label for="username">Nom d'utilisateur</label>
<input id="username" type="text" name="username">
~~~

{::nomarkdown}
</figure>
</div>
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Étiquettes et instructions 3.3.2](/WAI/WCAG21/quickref/#labels-or-instructions) ([Comprendre 3.3.2](/WAI/WCAG21/Understanding/labels-or-instructions))
* **Tutoriel**
  * [Commandes des étiquettes](/WAI/tutorials/forms/labels/)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Incluez des équivalents textuels pour les images

Veillez à ce qu'un équivalent textuel pour les images soit ajouté à toutes les images fonctionnelles et informatives. Utilisez un équivalent textuel vide `alt=""` pour les images décoratives, ou incluez dans le CSS. Les équivalents textuels sont généralement fournis par les auteurs du contenu écrit.

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Contenu non textuel 1.1.1](/WAI/WCAG21/quickref/#non-text-content) ([Comprendre 1.1.1](/WAI/WCAG21/Understanding/non-text-content))
* **Tutoriel**
  * [Images](/WAI/tutorials/images/)
* **Témoignage d'utilisateur**
  * [Décrit l'importance des équivalents textuels pour un utilisateur aveugle](/WAI/intro/people-use-web/stories#accountant)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Identifiez la langue de la page et les modifications de la langue

Indiquez la langue principal de chaque page en utilisant l'attribut `lang` dans la balise `html`, par exemple `<html lang="en">`. Utilisez l'attribut `lang` sur des éléments spécifiques lorsque la langue de l'élément diffère du reste de la page.

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Langue de la page 3.1.1](/WAI/WCAG21/quickref/#language-of-page) ([Comprendre 3.1.1](/WAI/WCAG21/Understanding/language-of-page))
  * [Langue d'un passage 3.1.2](/WAI/WCAG21/quickref/#language-of-parts) ([Comprendre 3.1.2](/WAI/WCAG21/Understanding/language-of-parts))
* **Guide pratique**
  * [Déclarer la langue en HTML](/International/questions/qa-html-language-declarations)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Utilisez le balisage pour véhiculer le sens et la structure

Utilisez le balisage approprié pour les titres, les listes, les tableaux, etc. L'HTML5 fournit des éléments supplémentaires, tels que les balises `<nav>` et `<aside>`, pour mieux structurer votre contenu. Les attributs role <abbr>WAI-ARIA</abbr> peuvent contribuer à donner plus de sens, par exemple, en utilisant l'attribut `role="search"` pour identifier les fonctionnalités de recherche. Travailler avec des designers et des auteurs des contenus pour s'accorder sur le sens et les utiliser de manière cohérente par la suite.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : utiliser l'HTML pour fournir une structure et du sens" class="example" %}

<div class="two-column">
<figure>
<figcaption>{% include_cached icon.html name="desktop" %} Rendu</figcaption>
<section>
  <article>
    <h2>Superbear à la rescousse</h2>
    <time datetime="2015-08-07">7 août 2015</time>
    <p>Superbear, le favori de la ville, a encore prouvé son courage en secourant un chaton coincé dans arbre. Les témoins de la scène racontent que les efforts de Superbear n'ont pas été appréciés par le félin, qui a infligé quelques petites griffes à son sauveur.</p>
    <aside>
      <h3>Articles connexes</h3>
      <ul>
        <li><a href="#">Superbear reçoit les clés de la ville</a></li>
        <li><a href="#">Superbear se présente comme maire</a></li>
      </ul>
    </aside>
  </article>
</section>
</figure>
<figure>
<figcaption>{% include_cached icon.html name="code" %} Extrait de code</figcaption>
{:/}

~~~html
<section>
  <article>
    <h2>Superbear à la rescousse</h2>
    <time datetime="2015-08-07">7 août 2015</time>
    <p>Superbear, le favori de la ville, a encore prouvé son courage en secourant un chaton coincé dans arbre. Les témoins de la scène racontent que les efforts de Superbear n'ont pas été appréciés par le félin, qui a infligé quelques petites griffes à son sauveur.</p>
    <aside>
      <h3>Articles connexes</h3>
      <ul>
        <li><a href="#">Superbear reçoit les clés de la ville</a></li>
        <li><a href="#">Superbear se présente comme maire</a></li>
      </ul>
    </aside>
  </article>
</section>
~~~

{::nomarkdown}
</figure>
</div>
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : un champ de recherche utilisant <abbr>WAI-ARIA</abbr>" class="example" %}

<div class="two-column">
<figure>
<figcaption>{% include_cached icon.html name="desktop" %} Rendu</figcaption>
<form action="#" method="post">
  <div role="search">
    <label for="search">Rechercher</label>
    <input type="search" id="search" aria-describedby="search-help">
    <div id="search-help">Historique des recherche par identifiant ou nom de client</div>
    <button type="submit">Rechercher</button>
  </div>
</form>
</figure>
<figure>
<figcaption>{% include_cached icon.html name="code" %} Extrait de code</figcaption>
{:/}

~~~html
<form action="#" method="post">
  <div role="search">
    <label for="search">Rechercher</label>
    <input type="search" id="search" aria-describedby="search-help">
    <div id="search-help">Historique des recherche par identifiant ou nom de client</div>
    <button type="submit">Rechercher</button>
  </div>
</form>
~~~

{::nomarkdown}
</figure>
</div>
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Informations et relations 1.3.1](/WAI/WCAG21/quickref/#info-and-relationships) ([Comprendre 1.3.1](/WAI/WCAG21/Understanding/info-and-relationships))
* **Tutoriel**
  * [Structure de page](/WAI/tutorials/page-structure/)
  * [Tableaux](/WAI/tutorials/tables/)
* **Témoignage d'utilisateur**
  * [Décrit comment des informations structurées aide les utilisateurs de lecteur d'écran](/WAI/intro/people-use-web/stories#accountant)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Aidez les utilisateurs à éviter et à corriger les erreurs

Fournissez des instructions claires, des messages d'erreur, et des notifications pour aider les utilisateurs à compléter les formulaires présents sur votre site Web. Lorsqu'une erreur survient :

* Aidez les utilisateurs à trouver d'où vient le problème
* Fournissez des explications spécifiques et compréhensibles
* Proposez des corrections

Soyez aussi flexibles que possible vis-à-vis du format lors du traitement des données saisies par l'utilisateur. Par exemple, acceptez les numéros de téléphone qui comprennent des espaces et supprimez les espaces lorsque nécessaire.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : champ destiné à un numéro de téléphone australien et une validation flexible" class="example" %}

<div class="two-column">
<figure>
<figcaption>{% include_cached icon.html name="desktop" %} Rendu</figcaption>
<label for="phone">Téléphone</label>
<input id="phone" name="phone" type="tel" pattern="^(\(?0[1-9]{1}\)?)?[0-9 -]*$" aria-describedby="phone-desc">
<p id="phone-desc">Par exemple, (02) 1234 1234</p>
</figure>
<figure>
<figcaption>{% include_cached icon.html name="code" %} Extrait de code</figcaption>
{:/}

~~~html
<label for="phone">Téléphone</label>
<input id="phone" name="phone" type="tel"
       pattern="^(\(?0[1-9]{1}\)?)?[0-9 -]*$"
       aria-describedby="phone-desc">
<p id="phone-desc">Par exemple, (02) 1234 1234</p>
~~~

{::nomarkdown}
</figure>
</div>
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Identification des erreurs 3.3.1](/WAI/WCAG21/quickref/#error-identification) ([Comprendre 3.3.1](/WAI/WCAG21/Understanding/error-identification))
* **Tutoriel**
  * [Validation de données](/WAI/tutorials/forms/validation/)
* **Témoignage d'utilisateur**
  * [Décrit comment des erreurs utiles aident un utilisateur dyslexique](/WAI/intro/people-use-web/stories#classroomstudent)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Reflétez l'ordre logique de lecture dans le code

Assurez-vous que l'ordre des éléments dans le code corresponde à l'ordre logique des informations présentées. Une des manières de le vérifier consiste à enlever le style CSS et regarder si l'ordre du contenu a du sens.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : refléter l'ordre logique de lecture dans le code" class="example" %}

<div class="two-column">
<div class="order">
  <article class="product">
    <h3 class="name">Sneakers</h3>
    {% include_cached img.html src="trainer.png" alt="Purple high top trainer with white laces, empty white dot on outside ankle, and white toe cap" %}
    <p class="desc">Sneakers pour un look classique et élégant.</p>
    <p class="buy"><a href="javascript:return false" class="button button-icon"><span>{% include_cached icon.html name="cart-plus" %} Ajouter au panier</span></a></p>
  </article>
</div>
<figure>
<figcaption>{% include_cached icon.html name="ex-circle" label="Wrong" %} L'image positionnée avant le titre pourrait ne pas être vue</figcaption>
{:/}

~~~html
<img src="images/trainer.png" alt="...">
<h3>Sneakers</h3>
<p>Les sneakers...</p>
<a href="...">Ajouter au panier</a>
~~~

{% include excol.html type="start" id="full-code-img-before-heading" %}
Voir tout l'exemple de code
{% include excol.html type="middle" %}

~~~html
<article class="product">
  <img alt="Sneakers violettes avec lacets blancs, rond blanc vide sur la cheville extérieure et pointe de chaussure blanche" src="images/trainer.png">
  <h3 class="name">Sneakers</h3>
  <p class="desc">Sneakers pour un look classique et élégant.</p>
  <p class="buy"><a href="javascript:return false"><svg class="icon"><use xlink:href="#cart-plus"/></svg> Ajouter au panier</a></p>
</article>
~~~

{% include excol.html type="end" %}

{::nomarkdown}
</figure>
<figure>
<figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Le titre marque le début de la section</figcaption>
{:/}

~~~html
<h3>Sneakers</h3>
<img src="images/trainer.png" alt="...">
<p>Les sneakers...</p>
<a href="...">Ajouter au panier</a>
~~~

{% include excol.html type="start" id="full-code-img-before-heading" %}
Voir tout l'exemple de code
{% include excol.html type="middle" %}

~~~html
<article class="product">
  <h3 class="name">Sneakers</h3>
  <img alt="Sneakers violettes avec lacets blancs, rond blanc vide sur la cheville extérieure et pointe de chaussure blanche" src="images/trainer.png">
  <p class="desc">Sneakers pour un look classique et élégant.</p>
  <p class="buy"><a href="javascript:return false"><svg class="icon"><use xlink:href="#cart-plus"/></svg> Ajouter au panier</a></p>
</article>
~~~

{% include excol.html type="end" %}

{::nomarkdown}
</figure>
</div>
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Ordre séquentiel logique 1.3.2](/WAI/WCAG21/quickref/#meaningful-sequence) ([Comprendre 1.3.2](/WAI/WCAG21/Understanding/meaningful-sequence))

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Créez un code qui s'adapte aux technologies des utilisateurs

Utilisez un design réactif pour adapter l'affichage à différents états d'agrandissement et de tailles de fenêtres d'affichage, tels que les appareils mobiles et les tablettes. Lorsque la taille de la police est d'au moins 200 %, évitez le défilement horizontal et empêcher toute rognure du contenu. Utilisez l'amélioration progressive pour veiller à ce que les fonctionnalités et le contenu soient disponibles peu importe la technologie utilisée.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : utiliser les requêtes média pour adapter la navigation" class="example" %}

<div class="adapt-code">
  <figure>
    <div class="code">
      <div class="grid-4">
        <div class="from-col1 to-col2">
{:/}

~~~css
/* Pour les plus petites fenêtres d'affichage, mettre la barre de navigation en plein écran */
@media screen and (min-width: 25em) {
  #nav {
    float: none;
    width: auto;
  }
  #main {
    margin-left: 0;
  }
}
~~~

{::nomarkdown}
</div>
<div class="from-col3 to-col4">
{:/}

~~~css
/* Sur les fenêtres d'affichage plus grandes, mettre la barre de navigation sur la gauche */
@media screen and (min-width: 43em) {
  #nav {
    float: left;
    width: 24%;
  }
  #main {
    margin-left: 27%;
  }
}
~~~

{::nomarkdown}
      </div>
    </div>
  </div>
  </figure>
</div>

{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Redimensionnement du texte 1.4.4](/WAI/WCAG21/quickref/#resize-text) ([Comprendre 1.4.4](/WAI/WCAG21/Understanding/resize-text))
  * [Identification cohérente 3.2.4](/WAI/WCAG21/quickref/#consistent-identification) ([Comprendre 3.2.4](/WAI/WCAG21/Understanding/consistent-identification))
* **Contexte**
  * [Écran de petite taille](/TR/mobile-accessibility-mapping/#h-small-screen-size)
* **Témoignage d'utilisateur**
  * [Décrit comment les vues équivalentes des pages agrandies peuvent être utiles](/WAI/intro/people-use-web/stories#retiree)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Fournissez une signification pour les éléments interactifs non standards

Utilisez <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> pour fournir des informations sur l'état et la fonction des widgets personnalisés, tels que les accordéons et les boutons personnalisés. Par exemple, `role="navigation"` et `aria-expanded="true"`. Du code supplémentaire est nécessaire pour mettre en oeuvre le comportement de ces widgets, comme le fait d'afficher et de masquer du contenu ou la manière dont le widget répond à des événements du clavier.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : Fonction et état du menu identifiés en utilisant WAI-ARIA" class="example" %}

<div class="non-standard">
  <figure>
      <div class="code">
{:/}

~~~html
<nav aria-label="Navigation principale" role="navigation">
  <ul>
    <li><a href="...">Accueil</a></li>
    <li><a href="...">Magasin</a></li>
    <li class="has-submenu">
      <a aria-expanded="false" aria-haspopup="true" href="...">SpaceBears</a>
      <ul>
          <li><a href="...">SpaceBear 6</a></li>
          <li><a href="...">SpaceBear 6 Plus</a></li>
      </ul>
    </li>
    <li><a href="...">MarsCars</a></li>
    <li><a href="...">Contact</a></li>
  </ul>
</nav>
~~~

{::nomarkdown}
      </div>
  </figure>
</div>

{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Nom, rôle, valeur 4.1.2](/WAI/WCAG21/quickref/#name-role-value) ([Comprendre 4.1.2](/WAI/WCAG21/Understanding/name-role-value))
* **Contexte**
  * [Commentaires sur l'utilisation d'ARIA en HTML](/TR/aria-in-html/)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Assurez-vous que tous les éléments interactifs sont accessibles au clavier

Pensez à l'accès au clavier, particulièrement au moment de développer les éléments interactifs, tels que les menus, les informations liées au passage de la souris, les accordéons masquables, ou les lecteurs multimédia. Utilisez `tabindex="0"` pour ajouter un élément qui ne reçoit normalement pas le focus, tels que `<div>` ou `<span>`, dans l'ordre de navigation lorsqu'il est utilisé pour l'interaction. Utilisez un script pour saisir et répondre aux événements clavier.   

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : bouton de menu accessible au clavier" class="example" %}

<div class="two-column keyboard-accessible">
<figure>
<figcaption>{% include_cached icon.html name="desktop" %} Rendu</figcaption>
<div class="rendered">
  <div id="example-button" class="menu-button" role="button" aria-expanded="false" aria-controls="example-button-menu" tabindex="0">{% include_cached icon.html name="menu" %} Menu</div>
  <div id="example-button-menu" class="menu" aria-hidden="true" tabindex="-1">
    <ul>
      <li><a href="javascript:return false">À propos</a></li>
      <li><a href="javascript:return false">Actualité</a></li>
      <li><a href="javascript:return false">Tickets</a></li>
      <li><a href="javascript:return false">Pour le plaisir</a></li>
    </ul>
  </div>
</div>
<script>
  !function() {
    "use strict";
    function e(e) {
        "true" == e.getAttribute("aria-hidden") ? (e.setAttribute("aria-hidden", "false"), e.focus()) : e.setAttribute("aria-hidden", "true")
    }
    function t(e) {
        "true" == e.getAttribute("aria-checked") ? (e.setAttribute("aria-checked", "false"), e.getElementsByTagName("span")[0].innerHTML = "Off") : (e.setAttribute("aria-checked", "true"), e.getElementsByTagName("span")[0].innerHTML = "On")
    }
    var a = document.getElementById("example-button");
    a && (a.addEventListener("keydown", function(t) {
        t.keyCode && 13 == t.keyCode && (e(document.getElementById("example-button-menu")), "true" == t.target.getAttribute("aria-expanded") ? t.target.setAttribute("aria-expanded", "false") : t.target.setAttribute("aria-expanded", "true"))
    }), a.addEventListener("click", function(t) {
        e(document.getElementById("example-button-menu")), "true" == t.target.getAttribute("aria-expanded") ? t.target.setAttribute("aria-expanded", "false") : t.target.setAttribute("aria-expanded", "true")
    }));
    var n = document.getElementById("switch");
    n && (n.addEventListener("keydown", function(e) {
        !e.keyCode || 32 != e.keyCode && 13 != e.keyCode || t(this)
    }), n.addEventListener("click", function() {
        t(this)
    }))
}();
</script>
</figure>
<figure>
<figcaption>{% include_cached icon.html name="code" %} Extrait de code</figcaption>
{:/}

~~~javascript
var buttonExample = document.getElementById('example-button');

buttonExample.addEventListener('keydown', function(e) {
  // Toggle the menu when RETURN is pressed
  if(e.keyCode && e.keyCode == 13) {
    toggleMenu(document.getElementById('example-button-menu'));
  }
});

buttonExample.addEventListener('click', function(e) {
// Toggle the menu on mouse click
  toggleMenu(document.getElementById('example-button-menu'));
});
~~~

{::nomarkdown}
</figure>
</div>
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Clavier 2.1.1](/WAI/WCAG21/quickref/#keyboard) ([Comprendre 2.1.1](/WAI/WCAG21/Understanding/keyboard))
* **Témoignage d'utilisateur**
  * [Décrit comment un utilisateur avec un trouble musculosquelettique](/WAI/intro/people-use-web/stories#reporter)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Évitez les CAPTCHAs dans la mesure du possible

Les CAPTCHAs posent problème pour un grand nombre de personnes. Il existe d'autres manières de vérifier si les données utilisateur ont été saisies par un humain faciles à utiliser, comme la détection automatique ou les interactions de l'interface. Si le CAPTCHA doit absolument être inclu, veillez à ce qu'il soit facile à comprendre et qu'il comprenne des alternatives pour les utilisateurs en situation de handicap, telles que :

* Fournir plus de deux moyens de résoudre les CAPTCHAs
* Fournir l'accès à un interlocuteur humain qui peut contourner le CAPTCHA
* Ne pas rendre obligatoires les CAPTCHAS pour les utilisateurs agréés

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Contenu non textuel 1.1.1](/WAI/WCAG21/quickref/#non-text-content) ([Comprendre 1.1.1](/WAI/WCAG21/Understanding/non-text-content))
* **Contexte**
  * [Inaccessibilité des CAPTCHAs](/TR/turingtest/)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="En savoir plus sur l'accessibilité" class="large" icon="readmore" %}
{:/}

Ces conseils sont quelques-uns des éléments à prendre en compte pour l'accessibilité Web. Les ressources suivantes vous aident à comprendre l'importance de l'accessibilité, et à prendre connaissance des recommandations pour rendre le Web plus accessible pour les personnes handicapées.

* [Introduction à l'accessibilité Web](https://www.w3.org/WAI/fundamentals/accessibility-intro/) — introduit à l'accessibilité, et fournit des liens vers de nombreuses ressources utiles
* [Principes d'accessibilité](/WAI/intro/people-use-web/principles) — présente les concepts liés aux recommandations en matière d'accessibilité Web
* [Comment les personnes handicapées utilisent le Web](/WAI/intro/people-use-web) — vous explique comment développer un contenu Web accessible aux personnes handicapées
* [Tutoriels sur l'accessibilité Web](/WAI/tutorials/) — comprend des recommandations relatives à la conception, par exemple, [fournir un équivalent textuel pour les images](/WAI/tutorials/images/)
* [Démonstration avant/après](/WAI/demos/bad/) — montre une version accessible et inaccessible d'un même site Web, ainsi que des commentaires sur les principaux obstacles à l'accessibilité et les moyens pour les éviter, et enfin des rapports d'évaluation pour les WCAG
* [Comment satisfaire aux WCAG (référence rapide)](/WAI/WCAG21/quickref/) — liste personnalisable de références rapides qui contient toutes les régles et les techniques des WCAG
* [Liste d'outils d'évaluation de l'accessibilité Web](/WAI/ER/tools/) — comprend des outils pour en savoir plus sur le rapport de contraste
* [Une vue d'ensemble de <abbr>WAI-ARIA</abbr>](/WAI/intro/aria) — introduit à <abbr>WAI-ARIA</abbr> avec des liens vers toutes les spécifications

{::nomarkdown}
{% include box.html type="end" %}
{:/}

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

## Des conceptions pour différentes tailles de fenêtres d'affichage

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

## Incluez des contenus multimédia et des images équivalents dans votre conception

Prévoyez une zone dans votre conception pour inclure des contenus multimédia et des images équivalents. Par exemple, vous pourriez avoir besoin :

* Des liens visibles vers les transcriptions de l'audio
* Des liens visibles vers les versions des vidéos avec audiodescription
* De texte ainsi que des icônes et des boutons graphiques
* Des sous-titres et des descriptions pour les tableaux ou les graphiques complexes

Travaillez avec les auteurs et les développeurs du contenu pour fournir des équivalents pour le contenu non textuel.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : la conception comprend des liens vers une transcription et une vidéo avec audiodescription" class="example" %}
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
{% include_cached box.html type="start" title="Exemple : afficher les boutons de commande de démarrage, d'arrêt, et de sélection dans la conception du carrousel." class="example" %}
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
* [Comment les personnes handicapées utilisent le Web](/WAI/intro/people-use-web) — examine les effets d'une conception accessible à l'aide d'exemples concrets
* [Tutoriels sur l'accessibilité Web](/WAI/tutorials/) — comprend des recommandations relatives à la conception, par exemple, [fournir un équivalent textuel pour les images](/WAI/tutorials/images/)
* [Démonstration avant/après](/WAI/demos/bad/) — montre une version accessible et inaccessible d'un même site Web, et des commentaires sur les obstacles à l'accessibilité et les moyens pour les éviter
* [Comment satisfaire aux WCAG (Référence rapide)](/WAI/WCAG21/quickref/) — liste personnalisable de références rapides qui contient toutes les règles et les techniques des WCAG
* [Liste d'outils d'évaluation de l'accessibilité Web](/WAI/ER/tools/) — comprend des outils pour en savoir plus sur le rapport de contraste

{::nomarkdown}
{% include box.html type="end" %}
{:/}
