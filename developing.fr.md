---
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

Utilisez un attribut `for` sur l'élément `<label>` relatif à l'attribut `id` de l'élément de formulaire, ou utilisez les attributs <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>. Dans des situations particulières, il serait acceptable de masquer visuellement les éléments `<label>`, mais la plupart du temps, les étiquettes sont nécessaires pour permettre à tous lecteurs de comprendre la saisie obligatoire.

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
{% include_cached box.html type="start" title="Plus d"informations" class="simple" %}
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
{% include_cached box.html type="start" title="Plus d'informations class="simple" %}
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
* [Tutoriels sur l'accessibilité Web](/WAI/tutorials/) — comprend des recommandations relatives au design, par exemple, [fournir un équivalent textuel pour les images](/WAI/tutorials/images/)
* [Démonstration avant/après](/WAI/demos/bad/) — montre une version accessible et inaccessible d'un même site Web, ainsi que des commentaires sur les principaux obstacles à l'accessibilité et les moyens pour les éviter, et enfin des rapports d'évaluation pour les WCAG
* [Comment satisfaire aux WCAG (référence rapide)](/WAI/WCAG21/quickref/) — liste personnalisable de références rapides qui contient toutes les régles et les techniques des WCAG
* [Liste d'outils d'évaluation de l'accessibilité Web](/WAI/ER/tools/) — comprend des outils pour en savoir plus sur le rapport de contraste
* [Une vue d'ensemble de <abbr>WAI-ARIA</abbr>](/WAI/intro/aria) — introduit à <abbr>WAI-ARIA</abbr> avec des liens vers toutes les spécifications

{::nomarkdown}
{% include box.html type="end" %}
{:/}
