// Add in share links to elements tagged with 'permalink'
(function () {
  'use strict';

  function addclass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      if(! hasclass(el, className)){
        el.className += ' ' + className;
      }
    }
  }

  function removeclass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  function hasclass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }

  // Create a base permalink element to clone and add to each marked element
  var permalink_element = document.createElement('a');
  		permalink_element.innerHTML = '<svg class="icon" width="15" height="15"><path d="M 12.259 9.615 C 11.667 9.615 11.1224 9.804 10.6746 10.118 L 5.4826 7.4612 L 10.617 4.8337 C 11.075 5.1754 11.6405 5.3835 12.2594 5.3835 C 13.773 5.3835 15 4.1794 15 2.6928 C 15 1.20615 13.773 0 12.2594 0 C 10.7475 0 9.521 1.20615 9.521 2.6928 L 9.5314 2.7871 L 4.382 5.4223 C 3.9242 5.0816 3.3595 4.8705 2.7406 4.8705 C 1.2263 4.8705 0 6.0776 0 7.5632 C 0 9.0504 1.2263 10.256 2.7406 10.256 C 3.4324 10.256 4.055 9.9954 4.538 9.579 L 9.5376 12.1384 L 9.521 12.307 C 9.521 13.793 10.7475 15 12.2594 15 C 13.773 15 15 13.793 15 12.307 C 15 10.8206 13.773 9.615 12.2594 9.615 Z"/></svg> SHARE';

  var permalink_wrapdiv = document.createElement('div')
  addclass(permalink_wrapdiv, 'permalink');

  var sharebox = document.createElement('div');
  addclass(sharebox, 'sharebox');
  // TODO: Consider how to allow any content in the email subject and body
  var shareboxtext = '<p><label>Link to this section:<input type="url" value="%s" readonly> Shortcut to copy the link: <kbd>ctrl</kbd>+<kbd>C</kbd> <em>or</em> <kbd>⌘</kbd><kbd>C</kbd></label></p><p><a href="mailto:?subject=Accessibility%20Resource&body=Hi!%0AYou%20might%20be%20interested%20in%20this%3A%0A%0A%s">E-mail a link to this section</a><button>Close</button></p>';
  
  var url = window.location.origin + window.location.pathname;

  // Add the link to each identified element
  var make_permalinks = document.querySelectorAll('.attach_permalink');
  Array.prototype.forEach.call(make_permalinks, function(el, i) {
    // If the element has no id generate one from the content, otherwise fail
    if(el.id.length === 0) {
      var id = '';
      var firstCharIndex = el.textContent.search(/[A-Za-z]/);
      if(firstCharIndex>=0) {
        id = el.textContent.substr(firstCharIndex,30).toLowerCase().replace(/[^a-z0-9-_:.]/g, '_');
      } else {
        throw new Error('Element has no id or legitimate content to make an one');
      }
      el.id = id;
    }
    
    // Clone the share element and add it to the DOM
    var clone_pl = permalink_element.cloneNode(true);
    clone_pl.setAttribute('href', '#' + el.id);
    clone_pl.setAttribute('aria-label', 'Share link to this section');
    
    var clone_sb_text = shareboxtext.replace(/%s/g, url + '#' + el.id);
    var clone_sb = sharebox.cloneNode(true);
    clone_sb.innerHTML = clone_sb_text;

    var clone_pl_wrapdiv = permalink_wrapdiv.cloneNode(true);
    clone_pl_wrapdiv.appendChild(clone_pl);
    clone_pl_wrapdiv.appendChild(clone_sb);
    clone_pl_wrapdiv.classList.add(el.localName);

    // Create a wrapper around the element to be marked with the permalink
    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'permalink-wrapper');
    wrapper.innerHTML = el.outerHTML;

    // Add the share button inside the wrapper
		wrapper.appendChild(clone_pl_wrapdiv, wrapper);

    console.log(wrapper);
    // Replace the permalinked element with the wrapper
    el.outerHTML = wrapper.outerHTML;
  });

  // Add in open/close functionality for the permalink button
  var permalinks = document.querySelectorAll('.permalink a');
  var shareboxes = document.querySelectorAll('.sharebox');
  Array.prototype.forEach.call(permalinks, function(el, i){
  	el.addEventListener('click', function(e){
      // Close all other open shares
      Array.prototype.forEach.call(shareboxes, function(sb, i){
        removeclass(sb, 'open');
      });
  		var sharebox = el.nextSibling;
  		if (hasclass(sharebox, 'open')) {
  			removeclass(sharebox, 'open');
  		} else {
  			addclass(sharebox, 'open');
  			sharebox.querySelector('input').select();
  		}
  		e.preventDefault();
  	});
  });  

  // Add close functionality to all sharebox close buttons
  var sharebox_buttons = document.querySelectorAll('.sharebox button');
	Array.prototype.forEach.call(sharebox_buttons, function(el, i){
		el.addEventListener('click', function(){
      removeclass(el.parentNode.parentNode, 'open');
	  	el.parentNode.parentNode.parentNode.querySelector('a').focus();
		});
	});
  
  // Add functionality to close all open shareboxes when anywhere else is clicked
	document.addEventListener('click', function(event){
	  var hasParent = false;
    for(var node = event.target; node != document.body; node = node.parentNode)
    {
      if(hasclass(node, 'permalink')) {
        hasParent = true;
        break;
      }
    }
	  if(!hasParent) {
	  	var openboxes = document.querySelectorAll('.sharebox.open');
	  	for (var i = openboxes.length - 1; i >= 0; i--) {
	  		removeclass(openboxes[i], 'open');
	  	};
	  }
	});
}());