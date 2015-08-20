// helper function to place modal window as the first child
// of the #page node
var m = document.getElementById('modal_window'),
    p = document.getElementById('page');

function swap () {
//  p.parentNode.insertBefore(m, p);
}

swap();


// modal window
(function() {

  'use strict';

  // list out the vars
  var openModalId,
      allNodes = document.querySelectorAll("*"),
      lastFocus,
      i;

  var closeButtonTemplate = document.createElement('button');
  closeButtonTemplate.setAttribute('class', 'btn-close');
  closeButtonTemplate.setAttribute('type', 'button');
  closeButtonTemplate.setAttribute('aria-label', 'close');
  closeButtonTemplate.innerHTML = '&times;';
  
  // Cut down on what we need to type to get an ID
  function getById ( id ) {
    return document.getElementById(id);
  }
  
  // Class list manipulation functions
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

  // Get the modal root id
  function getModalId ( id ) {
    return id.slice(0, id.lastIndexOf('-'));
  }


  // Let's open the modal
  function modalShow (e) {
    lastFocus = document.activeElement;
    
    // Set the hidden status of the overlay to show the overlap
    getById(this.id+'-overlay').setAttribute('aria-hidden', 'false');
    getById(this.id+'-holder').setAttribute('tabindex', '0');
    getById(this.id+'-holder').focus();
    openModalId = this.id;
  }


  // binds to both the button click and the escape key to close the modal window
  // but only if modalOpen is set to true
  function modalClose (e) {
    if(openModalId) {
      var mOverlay = getById(openModalId+'-overlay'),
          mHolder = getById(openModalId+'-holder');
      if (mOverlay.getAttribute('aria-hidden') == 'false' && ( !e.keyCode || e.keyCode === 27 ) ) {
        mOverlay.setAttribute('aria-hidden', 'true');
        mHolder.setAttribute('tabindex', '-1');
        openModalId = null;
        lastFocus.focus();
      }
    }
  }


  // Restrict focus to the modal window when it's open.
  // Tabbing will just loop through the whole modal.
  // Shift + Tab will allow backup to the top of the modal,
  // and then stop.
  function focusRestrict ( event ) {
    var mHolder = getById(openModalId+'-holder');
    if ( openModalId && !mHolder.contains( event.target ) ) {
      event.stopPropagation();
      mHolder.focus();
    }
  }


  // Add a modal open event to any tagged item and set up the classes
  var mOpens = document.querySelectorAll('.modal-open');
  Array.prototype.forEach.call(mOpens, function(el, i) {
    // Add modal classes to various containters
    addclass(getById(el.id+'-overlay'), 'modal-overlay');
    addclass(getById(el.id+'-holder'), 'modal-holder');
    addclass(getById(el.id+'-title'), 'modal-title');

    // Add a event listener to show the modal
    el.addEventListener('click', modalShow);
    
    // Add in a close button
    var mHolder = getById(el.id+'-holder');
    var mClose = closeButtonTemplate.cloneNode(true);
    mClose.addEventListener('click', modalClose);
    mHolder.appendChild(mClose);
  });


  // Close modal window by clicking on the overlay
  var mOverlays = document.querySelectorAll('.modal-overlay');
  Array.prototype.forEach.call(mOverlays, function(el, i) {
    el.addEventListener('click', modalClose, false);
  });

  // close modal by keydown, but only if modal is open
  document.addEventListener('keydown', function (e) {
    if(openModalId) {
      modalClose(e);
    }
  });

  // restrict tab focus on elements only inside modal window
  for (i = 0; i < allNodes.length; i++) {
    allNodes.item(i).addEventListener('focus', focusRestrict);
  }
})();