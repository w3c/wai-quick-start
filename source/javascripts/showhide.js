// Add in show/hide functionality to elements tagged with the class 'attach_show' or 'attach_hide'
// Attach_show will attach a show/hide toggle defaulting to visible,
// Attach_hide will attach a show/hide toggle defaulting to hidden
// Assumes a control element, followed by a block that is to be shown or hidden
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

  var show_text = 'Show<span> this section</span>';
  var hide_text = 'Hide<span> this section</span>';
  
  // Create a base showhide element to clone and add to each marked element
  var showhide_element = document.createElement('a');
      showhide_element.setAttribute('class', 'toggle');
  		showhide_element.innerHTML = hide_text;

  // Add the link to each identified element
  var make_showhides = document.querySelectorAll('.attach_show');
  Array.prototype.forEach.call(make_showhides, function(el, i) {
    // Clone the showhide element and add it to the DOM
    var clone_sh = showhide_element.cloneNode(true);
    clone_sh.setAttribute('href', '#' + el.id);
    el.innerHTML = el.innerHTML + ' ';
		el.appendChild(clone_sh);
        
    // Add the max-height of the section to be hidden
		var reveal = el.nextElementSibling;
    reveal.style.maxHeight = reveal.offsetHeight + 'px';
    
    // Add a class to the sibling to indicate state
		addclass(el.nextElementSibling, 'shown');
  });

	showhide_element.innerHTML = show_text;
  var make_showhides = document.querySelectorAll('.attach_hide');
  Array.prototype.forEach.call(make_showhides, function(el, i) {
    // Clone the showhide element and add it to the DOM
    var clone_sh = showhide_element.cloneNode(true);
    clone_sh.setAttribute('href', '#' + el.id);
    el.innerHTML = el.innerHTML + ' ';
		el.appendChild(clone_sh);

    // Add the max-height of the section to be hidden
		var reveal = el.nextElementSibling;
    reveal.style.maxHeight = reveal.offsetHeight + 'px';
    
    // Add a class to the sibling to indicate state
		addclass(el.nextElementSibling, 'hidden');
  });

  // Add in show/hide functionality for the toggle link
  // TODO: When hidden the block is still keyboard accessible. Needs to be display: none but this
  // wreaks the show/hide CSS transition
  var showhides = document.querySelectorAll('a.toggle');
  Array.prototype.forEach.call(showhides, function(el, i){
  	el.addEventListener('click', function(e){
  		var reveal = el.parentNode.nextElementSibling;
  		if (hasclass(reveal, 'shown')) {
  			addclass(reveal, 'hidden');
  			removeclass(reveal, 'shown');
        el.innerHTML = show_text;
  		} else {
  			addclass(reveal, 'shown');
  			removeclass(reveal, 'hidden');
        el.innerHTML = hide_text;
  		}
  		e.preventDefault();
  	});
  });  
}());