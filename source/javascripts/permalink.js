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
  		permalink_element.innerHTML = '<svg class="icon" viewBox="0 0 1024 1024"><path d="M864 704c-45.16 0-85.92 18.738-115.012 48.83l-431.004-215.502c1.314-8.252 2.016-16.706 2.016-25.328s-0.702-17.076-2.016-25.326l431.004-215.502c29.092 30.090 69.852 48.828 115.012 48.828 88.366 0 160-71.634 160-160s-71.634-160-160-160-160 71.634-160 160c0 8.622 0.704 17.076 2.016 25.326l-431.004 215.504c-29.092-30.090-69.852-48.83-115.012-48.83-88.366 0-160 71.636-160 160 0 88.368 71.634 160 160 160 45.16 0 85.92-18.738 115.012-48.828l431.004 215.502c-1.312 8.25-2.016 16.704-2.016 25.326 0 88.368 71.634 160 160 160s160-71.632 160-160c0-88.364-71.634-160-160-160z"></path></svg> SHARE';

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
    clone_pl.setAttribute('aria-label', 'Share link to the section "' + el.textContent + '"');
    
    var clone_sb_text = shareboxtext.replace(/%s/g, url + '#' + el.id);
    var clone_sb = sharebox.cloneNode(true);
    clone_sb.innerHTML = clone_sb_text;

    var clone_pl_wrapdiv = permalink_wrapdiv.cloneNode(true);
    clone_pl_wrapdiv.appendChild(clone_pl);
    clone_pl_wrapdiv.appendChild(clone_sb);
    clone_pl_wrapdiv.classList.add(el.localName);

		el.parentNode.insertBefore(clone_pl_wrapdiv, el);
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