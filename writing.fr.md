---
title: "Un texte accessible – Conseils pour démarrer"
title_html: "Un texte accessible"
nav_title: Conseils pour démarrer

ref: /tips/writing/   # Do not change this
permalink: /tips/writing/fr   # add language code  /tips/writing/@@
lang: fr
navigation:
  previous: /tips/
  next: /tips/designing/
resource:
  ref: /tips/
navigation:
  previous: /tips/
  next:     /tips/designing/

lang: fr   # change language code
github:
   repository: w3c/wai-quick-start
   path: '_tips/writing.fr.md'   # add language code writing.@@.md
last_updated: 2020-11-09   # change to date of translation
Traducteurs :
-nom : Sofia Ahmed
# contributeurs :
# - nom : "Sandra Velazquez Gonzalez"

layout: default
order: 2
ext_css: tips.css
title_icon: /tips/img/icons.svg#writing

footer: >   # translate text and dates; do not update dates
  <p><strong>Date :</strong> Mise à jour mineure : 9 janvier 2019. Mise à jour : 15 avril 2016. Première publication en septembre 2015.</p>
  <p><strong>Rédacteurs :</strong> <a href="https://www.w3.org/People/kevin">Kevin White</a>, <a href="https://www.w3.org/People/shadi">Shadi Abou-Zahra</a>, et <a href="https://www.w3.org/People/Shawn">Shawn Lawton Henry</a>. <a href="https://w3c.github.io/wai-website/tips/acknowledgements/">Remerciements</a>.</p>
  <p>Développé par le <a href="https://www.w3.org/WAI/EO/">Groupe de travail Éducation et Promotion (EOWG)</a>.
  Développé avec le soutien du <a href="https://www.w3.org/WAI/DEV/">projet WAI-DEV</a>, co-financé par le programme <abbr title="Technologies de la Société de l'information">IST</abbr> de la Commission européenne.</p>

---

{::nomarkdown}
{% include box.html type="start" h="2" title="Résumé" class="full" %}
{:/}

Cette page présente certaines considérations fondamentales pour vous aider à démarrer dans la rédaction de contenu Web plus accessible pour les personnes en situation de handicap. Ces conseils sont de bonnes pratiques pour vous aider à satisfaire aux exigences des Règles pour l'accessibilité des contenus Web (WCAG). Retrouvez plus d'informations via les liens vers les recommandations des WCAG correspondantes, les documents intitulés "Comprendre" qui comprennent des informations complémentaires détaillées, les tutoriels pour vous accompagner, les témoignages d'utilisateurs, et plus encore.

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

## Fournissez des titres de page informatifs et uniques

Pour chaque page Web, fournissez un titre court qui décrit le contenu de la page et qui la distingue des autres pages. Le titre de la page est souvent le même que le titre principal de la page. Mettez d'abord les informations les plus pertinentes ; par exemple, mettez le nom de la page avant le nom de l'organisation. Pour les pages qui font partie d'un processus en plusieurs étapes, incluez l'étape dont il est question dans le titre de la page.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : Titres de page" class="example" %}
{:/}

<div class="page-title">
  <figure>
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Titre de la page d'accueil</figcaption>
    <div>
      <svg version="1.1" width="462" height="27">
        <g transform="scale(1.2)">
          <path class="banner" d="M 0 9.75 L 0 14.8125 L 0 21.625 L 384.5 21.625 L 384.5 14.8125 L 384.5 9.75 L 384.5 3.25 C 384.5 1.59314575 383.15685 .25 381.5 .25 L 3 .25 C 1.34314575 .25 0 1.59314575 0 3.25 Z" fill="#f5f5f5"/>
          <text transform="translate(10 15)">Space Teddy Inc.</text>
          <g transform="translate(333 4)">
            <rect x="0" y="9.5" width="10" height="1.5"/>
            <path d="M 24 10 L 17 10 L 17 4 L 24 4 Z M 16 11 L 25 11 L 25 3 L 16 3 Z"/>
            <path d="M 41 3 L 40 2 L 36 6 L 32 2 L 31 3 L 35 7 L 31 11 L 32 12 L 36 8 L 40 12 L 41 11 L 37 7 Z"/>
          </g>
        </g>
      </svg>
    </div>
  </figure>
  <figure>
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Nom de la page suivi du nom de l'organisation</figcaption>
    <div>
      <svg version="1.1" width="462" height="27">
        <g transform="scale(1.2)">
          <path class="banner" d="M 0 9.75 L 0 14.8125 L 0 21.625 L 384.5 21.625 L 384.5 14.8125 L 384.5 9.75 L 384.5 3.25 C 384.5 1.59314575 383.15685 .25 381.5 .25 L 3 .25 C 1.34314575 .25 0 1.59314575 0 3.25 Z" fill="#f5f5f5"/>
          <text transform="translate(10 15)">Dernières actualités &bull; Space Teddy Inc.</text>
          <g transform="translate(333 4)">
            <rect x="0" y="9.5" width="10" height="1.5"/>
            <path d="M 24 10 L 17 10 L 17 4 L 24 4 Z M 16 11 L 25 11 L 25 3 L 16 3 Z"/>
            <path d="M 41 3 L 40 2 L 36 6 L 32 2 L 31 3 L 35 7 L 31 11 L 32 12 L 36 8 L 40 12 L 41 11 L 37 7 Z"/>
          </g>
        </g>
      </svg>
    </div>
  </figure>
  <figure>
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Nom de la page avec l'étape d'un processus</figcaption>
    <div>
      <svg version="1.1" width="462" height="27">
        <g transform="scale(1.2)">
          <path class="banner" d="M 0 9.75 L 0 14.8125 L 0 21.625 L 384.5 21.625 L 384.5 14.8125 L 384.5 9.75 L 384.5 3.25 C 384.5 1.59314575 383.15685 .25 381.5 .25 L 3 .25 C 1.34314575 .25 0 1.59314575 0 3.25 Z" fill="#f5f5f5"/>
          <text transform="translate(10 15)">Achetez votre ours (Étape 1 sur 3) &bull;Étape 1 sur 3 Space Teddy Inc.</text>
          <g transform="translate(333 4)">
            <rect x="0" y="9.5" width="10" height="1.5"/>
            <path d="M 24 10 L 17 10 L 17 4 L 24 4 Z M 16 11 L 25 11 L 25 3 L 16 3 Z"/>
            <path d="M 41 3 L 40 2 L 36 6 L 32 2 L 31 3 L 35 7 L 31 11 L 32 12 L 36 8 L 40 12 L 41 11 L 37 7 Z"/>
          </g>
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
  * [Page intitulée 2.4.2](/WAI/WCAG21/quickref/#page-titled) ([Comprendre 2.4.2](/WAI/WCAG21/Understanding/page-titled))

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Utilisez des titres pour donner du sens et une structure

Utilisez des titres courts pour regrouper les paragraphes apparentés et décrire clairement les sections. Créer les titres adéquats permet d'avoir un aperçu du contenu.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : Utiliser des titres pour organiser le contenu" class="example" %}
{:/}

<div class="heading-structure two-column">
  <figure>
    <figcaption>{% include_cached icon.html name="ex-circle" label="Wrong" %} Sans titres</figcaption>
    <div>
      {% include_cached img.html src="headings-poor.png" alt="Illustration de page sans titres, retrouvez un exemple détaillé ci-dessous" %}
    </div>
{% include_cached excol.html type="start" id="no-headings" %}
Voir un exemple de page en ligne
{% include_cached excol.html type="middle" %}
<h2 id="no-headings-modal-title"><span class="visuallyhidden">Exemple : </span>Titres et sous-titres</h2>

<p>Les éléments HTML fournissent des informations sur la hiérarchie structurelle d'un document. Utiliser correctement les élements permet de donner plus de sens aux technologies d'assistance. Dans de nombreux cas, cela va également rendre l'édition de votre document plus facile.</p>

<p>Pour les documents plus longs que trois ou quatre paragraphes, les titres et les sous-titres sont importants pour faciliter l'utilisation et l'accessibilité. Ils permettent aux utilisateurs de déterminer les grandes lignes d'un document et d'orienter leur navigation vers des informations spécifiques en fonction de leurs intérêts.</p>

<p>Les sous-titres sont classés en fonction de niveaux de 1 à 6. Le niveau le plus élevé est le "Niveau 1" et correspond souvent au titre de la page ou de la section principale du document. Les sous en-têtes passent par des niveaux d'en-têtes croissants.</p>

<p>Les lecteurs visuels identifient les en-têtes en balayant les pages à la recherche d'un texte de taille plus grande ou de style différent. Les utilisateurs de technologies d'assitance ne peuvent pas voir ces modifications visuelles, changer le style n'est donc pas un indice suffisant.</p>

<p>À la place, les titres doivent être "identifiés" sémantiquement pour permettre aux technologies d'assistance d'identifier les titres. Cela peut-être présenté à l'utilisateur sous forme d'aide à la navigation.</p>

<p>C'est pourquoi ajouter des titres est l'un des outils les plus importantes pour un utilisateur de lecteur d'écran afin qu'il ou elle puisse savoir ce qui se trouve sur la page. Notez que l'identification requiert généralement une modification de formatage visuel qui peut être ajusté dans de nombreux documents.</p>

<cite>Adapté des <a href="http://accessibility.psu.edu/headings/">titres et des sous-titres de Penn State</a></cite>
{% include_cached excol.html type="end" %}
  </figure>
  <figure>
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Avec des titres et des sous-titres</figcaption>
    <div>
      {% include_cached img.html src="headings-good.png" alt="Illustration d'une structure de titres optimale, plus d'exemples détaillés ci-dessous"%}
    </div>
{% include_cached excol.html type="start" id="headings-good" %}
Voir un exemple de page en ligne
{% include_cached excol.html type="middle" %}
<h2 id="headings-modal-title"><span class="visuallyhidden">Exemple : </span>Titres et sous-titres</h2>

<p><abbr>HTML</abbr> Les éléments HTML fournissent des informations sur la hiérarchie structurelle d'un document. Utiliser correctement les élements permet de donner plus de sens aux technologies d'assistance. Dans de nombreux cas, cela va également rendre l'édition de votre document plus facile..</p>

<h3><span class="visuallyhidden">Exemple: </span>Fonction des titres</h3>

<p>Pour les documents plus longs que trois ou quatre paragraphes, les titres et les sous-titres sont importants pour faciliter l'utilisation et l'accessibilité. Ils permettent aux utilisateurs de déterminer les grandes lignes d'un document et d'orienter leur navigation vers des informations spécifiques en fonction de leurs intérêts.</p>

<h4><span class="visuallyhidden">Exemple : </span>Niveaux des titres</h4>

<p>Les sous-titres sont classés en fonction de niveaux de 1 à 6. Le niveau le plus élevé est le "niveau 1" et correspond souvent au titre de la page ou de la section principale du document. Les sous en-têtes passent par des niveaux d'en-têtes croissants.</p>

<h3><span class="visuallyhidden">Exemple: </span>Sens vs mise en forme</h3>

<p>Les lecteurs visuels identifient les en-têtes en balayant les pages à la recherche d'un texte de taille plus grande ou de style différent. Les utilisateurs de technologies d'assitance ne peuvent pas voir ces modifications visuelles, changer le style n'est donc pas un indice suffisant.</p>

<p>À la place, les titres doivent être "identifié" sémantiquement pour permettre aux technologies d'assistance d'identifier les titres. Cela peut-être présenté à l'utilisateur sous forme d'aide à la navigation.</p>

<p>C'est pourquoi ajouter des titres est l'un des outils les plus importants pour un utilisateur de lecteur d'écran afin qu'il ou elle puisse savoir ce qui se trouve sur la page. Notez que l'identification requiert généralement une modification de formatage visuel qui peut être ajusté dans de nombreux documents.</p>

<cite>Adapté des <a href="http://accessibility.psu.edu/headings/">titres et des sous-titres de Penn State</a></cite>
{% include_cached excol.html type="end" %}
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
  * [Information et relations 1.3.1](/WAI/WCAG21/quickref/#info-and-relationships) ([Comprendre 1.3.1](/WAI/WCAG21/Understanding/info-and-relationships))
* **Témoignage d'utilisateur**
  * [Comment un utilisateur de lecteur d'écran utilise les en-têtes pour naviguer]({{ "/people-use-web/user-stories/" | relative_url }}#accountant)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Donnez du sens à un texte de lien

Écrivez le texte du lien de manière à décrire le contenu relatif au lien. Évitez un texte de lien ambigu, tel que "cliquez ici" ou "en savoir plus". Indiquez les informations pertinentes du contenu relatif au lien, comme le type et la taille du document, par exemple, "Document de proposition (RTF, 20Mo)".

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : utiliser le texte du lien pour décrire la page relative" class="example" %}
{:/}

<div class="meaningful-links two-column">
  <figure>
    <figcaption>{% include_cached icon.html name="ex-circle" label="Wrong" %} Sans informations</figcaption>
    <div>
      <p class="fail">Pour plus d'informations sur l'indépendance des dispositifs, <a href="javascript:return false">cliquez ici</a>.</p>
    </div>
  </figure>
  <figure>
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Informations significatives </figcaption>
    <div>
      <p class="pass">En savoir plus <a href="javascript: return false">sur l'indépendance des dispositifs</a>.</p>
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
  * [Fonction du lien (selon le contexte) 2.4.4](/WAI/WCAG21/quickref/#link-purpose-in-context) ([Comprendre 2.4.4](/WAI/WCAG21/Understanding/link-purpose-in-context))
  * [Fonction du lien (lien uniquement) 2.4.9](/WAI/WCAG21/quickref/#link-purpose-link-only) ([Comprendre 2.4.9](/WAI/WCAG21/Understanding/link-purpose-link-only))

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Rédigez des équivalents textuels significatifs pour les images

Pour chaque image, rédigez un équivalent textuel qui fournit des informations sur l'image, ou sur son utilité. Pour les images purement décoratives, un équivalent textuel n'est pas nécessaire.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : utiliser un texte équivalent pour communiquer des informations importantes" class="example" %}
{:/}

<div class="text-alt two-column">
  <figure>
    <figcaption>{% include_cached icon.html name="ex-circle" label="Wrong" %} Non informatif</figcaption>
    <div>
      {% include_cached img.html src="phone_charging.png" alt="Charging phone"  float="left" %}
      <div>
        <p> Chargement du téléphone : connectez le téléphone à une prise électrique en utilisant le câble et l'adaptateur fournis.</p>
        <p><strong>Texte alternatif pour l'image</strong>: "Chargement du téléphone"</p>
      </div>
    </div>
  </figure>
  <figure>
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Informatif</figcaption>
    <div>
      {% include_cached img.html src="phone_charging.png" alt="Branchez le câble sur le bord inférieur du téléphone." float="left" %}
      <div>
        <p>Chargement du téléphone : connectez le téléphone à une prise électrique en utilisant le câble et l'adaptateur fournis.</p>
        <p><strong>Texte équivalent pour l'image</strong>: "Branchez le câble sur le bord inférieur du téléphone"</p>
      </div>
    </div>
  </figure>
</div>
<p class="note">Le texe équivalent n'est généralement pas visible ; il est inclus dans cet exemple pour vous permettre de voir de quoi il s'agit.</p>

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
  * [Décrit l'importance des équivalents textuels pour un utilisateur aveugle]({{ "/people-use-web/user-stories/" | relative_url }}#accountant)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Créez des transcriptions et des sous-titres pour les contenus multimédias

Pour du contenu uniquement audio, tel qu'un podcast, fournissez une transcription. Pour du contenu audio et visuel, tel que les vidéos de formation, fournissez également des sous-titres. Incluez dans les transcriptions et les sous-titres les informations parlées et les sons importants à la compréhension du contenu, par exemple, "la porte grince". Pour les transcriptions de vidéo, incluez également une description du contenu visuel important, par exemple "Athan quitte la pièce".

{::nomarkdown}
{% include_cached box.html type="start" title="Plus d'informations" class="simple" %}
{:/}

* **WCAG**
  * [Sous-titres (pré-enregistrés) 1.2.2](/WAI/WCAG21/quickref/#captions-prerecorded) ([Comprendre 1.2.2](/WAI/WCAG21/Understanding/captions-prerecorded))
  * [Audiodescription ou version de remplacement pour un média temporel (pré-enregistré) 1.2.3](/WAI/WCAG21/quickref/#audio-description-or-media-alternative-prerecorded) ([Comprendre 1.2.3](/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded))
* **Témoignage d'utilisateur**
  * [Décrit de quelle manière les sous-titres aident un étudiant sourd]({{ "/people-use-web/user-stories/#onlinestudent" | relative_url }})

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Fournissez des instructions claires

Assurez-vous que les instructions, l'aide, et les messages d'erreur sont clairs, faciles à comprendre, et évitent un langage inutilement technique. Décrivez les données à saisir, telles que les formats de date.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : les instructions communiquent quelles informations doit fournir l'utilisateur" class="example" %}
{:/}

<div class="errors">
  <figure>
    <div>
      <form action="#" method="post">
        <p id="password-desc">Le mot de passe doit comporter au moins six caractères dont au moins un chiffre de (0-9).</p>
        <div class="row">
          <label for="password">Mot de passe</label>
          <input aria-describedby="password-desc" type="password" id="password" name="password" value="">
        </div>
      </form>
    </div>
  </figure>
</div>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="Exemple : le message d'erreur indique quel est le problème et, éventuellement, comment le régler" class="example" %}
{:/}

<div class="errors">
  <figure>
    <div>
      <ol class="fa-ul error-list">
        <li id="error_email">{% include_cached icon.html name="warning" label="Error" %} <a href="javascript:return false">Le nom d'utilisateur "superbear" est déjà utilisé.</a></li>
        <li id="error_password">{% include_cached icon.html name="warning" label="Error" %} <a href="javascript:return false">Le mot de passe doit inclure au moins un chiffre.</a></li>
      </ol>
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
* **Témoignage d'utilisateur**
  * [Décrit de quelle manière des instructions simples aident les personnes souffrant de troubles d'apprentissage]({{ "/people-use-web/user-stories/" | relative_url }}#supermarketassistant)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## Gardez un contenu clair et concis

Utilisez un langage et une mise en forme simples, adaptés au contexte.

* Rédigez des phrases et des paragraphes à la fois courts et clairs.
* Évitez l'utilisation de mots et de phrases trop compliqués. Envisagez de fournir un glossaire pour les termes que les utilisateurs pourraient ne pas connaître.
* Décrivez les acronymes à la première apparition. Par exemple, Les règles pour l'accessibilité des contenus Web (WCAG).
* Envisagez de fournir un glossaire pour les termes que les utilisateurs pourraient ne pas connaître.
* Utilisez un formatage de liste si nécessaire.
* Envisagez l'utilisation d'images, d'illustrations, de vidéo, d'audio, et de symboles pour aider à préciser le sens.

{::nomarkdown}
{% include_cached box.html type="start" title="Exemple : rendre le contenu lisible et compréhensible" class="example" %}
{:/}

<div class="two-column">
  <figure class="from-col1 to-col2">
    <figcaption>{% include_cached icon.html name="ex-circle" label="Wrong" %} Inutilement compliqué</figcaption>
    <div>
      <p class="fail">CPP : En cas de collision de véhicules, un représentant désigné par l'entreprise cherchera à déterminer l'étendue et la cause des dommages aux biens appartenant à toutes les parties concernées. Une fois que notre représentant obtient des informations qui nous permettent de comprendre la causalité, nous pouvons ou non attribuer une compensation monétaire appropriée. La décision qui en résulte peut donner lieu à l'une des options suivantes : la demande n'est pas approuvée et se voit attribuer un statut de rejet, le statut de la demande est ambigu et nécessitera des informations supplémentaires avant de pouvoir être traitée, la demande est partiellement approuvée et un paiement réduit est attribué et émis, ou la demande est entièrement approuvée et le paiement total de la demande est attribué et émis.</p>
    </div>
  </figure>
  <figure class="from-col3 to-col4">
    <figcaption>{% include_cached icon.html name="check-circle" label="OK" %} Plus facile à comprendre</figcaption>
    <div>
      <p class="pass">Procédure de traitement des demandes : Si vous avez un accident de voiture, notre agent mènera une enquête. Les résultats de l'enquête détermineront le paiement de la demande d'indemnisation. Cela pourrait entraîner :</p>
      <ul>
        <li>Une demande d'indemnisation approuvée - un paiement complet</li>
        <li>Une demande partiellement approuvée - un paiement réduit</li>
        <li>Une demande indéterminée - un complément d'informations</li>
        <li>Une demande rejetée - pas de paiement</li>
      </ul>
      <p>{% include_cached img.html src="clear_text_diagram.png" alt="" style="max-width:100%" %}</p>
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
  * [Niveau de lecture 3.1.5](/WAI/WCAG21/quickref/#reading-level) ([Comprendre 3.1.5](/WAI/WCAG21/Understanding/reading-level))
  * [Mots rares 3.1.3](/WAI/WCAG21/quickref/#unusual-words) ([Comprendre 3.1.3](/WAI/WCAG21/Understanding/unusual-words))
  * [Abréviations 3.1.4](/WAI/WCAG21/quickref/#abbreviations) ([Comprendre 3.1.4](/WAI/WCAG21/Understanding/abbreviations))
* **Témoignage d'utilisateur**
  * [Les avantages d'un texte facile à lire pour un utilisateur souffrant de trouble de la lecture]({{ "/people-use-web/user-stories/" | relative_url }}#classroomstudent)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

{::nomarkdown}
{% include box.html type="start" title="En savoir plus sur l'accessibilité" class="large" icon="readmore" %}
{:/}

Ces conseils sont quelques-uns des éléments à prendre en compte pour l'accessibilité Web. Les ressources suivantes vous aident à en savoir plus sur l'importance de l'accessibilité, et sur les recommandations pour rendre le Web plus accessible aux personnes en situation de handicap.

* [Introduction à l'accessibilité]({{ "/fundamentals/accessibility-intro/" | relative_url }}) — Introduit l'accessibilité et fournit des liens vers de nombreuses ressources utiles
* [Principes d'accessibilité]({{ "/fundamentals/accessibility-intro/" | relative_url }}) — Une introduction aux recommandations des <abbr>WCAG</abbr>
* [Comment les personnes en sitution de handicap utilisent le Web]({{ "/people-use-web/" | relative_url }}) — Exemples concrets soulignant l'importance de l'accessibilité pour les personnes en situation de handicap
* [Comment répondre aux exigences des WCAG (Référence rapide)](/WAI/WCAG21/quickref/) — référence personnalisable de toutes recommandations et techniques des WCAG

{::nomarkdown}
{% include box.html type="end" %}
{:/}
