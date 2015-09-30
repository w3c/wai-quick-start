// Selector to search for focusable items
var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";

// Store the item that has focus before opening the modal window
var focusedElementBeforeModal;

// Store the currently open modal id
var openModalId;

(function() {
  // Find all modal window triggers
  var modalTriggers = document.querySelectorAll('.modal-open');
  
  // Add a modal overlay to indicate that the rest of the page is unavailable.
  // The same overlay is used for every modal window
  var modalOverlay = document.createElement('div');
  modalOverlay.setAttribute('id', 'modal-overlay');
  modalOverlay.setAttribute('class', 'modal-overlay');
  document.getElementsByTagName("body")[0].appendChild(modalOverlay);

  // For each trigger...
  Array.prototype.forEach.call(modalTriggers, function(el, i) {
    // Add class and aria attributes to the modal holder
    modalHolder = getById(el.id + '-holder');
    addclass(modalHolder, 'modal-holder');
    modalHolder.setAttribute('role','dialog');
    modalHolder.setAttribute('aria-labelledby', el.id + '-title');
    modalHolder.setAttribute('aria-describedby', el.id + '-desc');
    modalHolder.setAttribute('aria-hidden', 'true');
    modalHolder.setAttribute('tabindex', '-1');

    // Add a description into the modal
    var modalDesc = document.createElement('div');
    modalDesc.setAttribute('id', el.id + '-desc');
    modalDesc.setAttribute('class', 'modal-desc');
    modalDesc.innerHTML = 'Beginning of dialog window. Escape will cancel and close the window.';
    modalHolder.insertBefore(modalDesc, modalHolder.firstChild);
    
    // Add class for the modal title
    modalTitle = getById(el.id + '-title');
    addclass(modalTitle, 'modal-title');

    // Add a close button, with an click trigger to close
    var closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'btn-close');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('aria-label', 'close');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', hideModal);
    modalHolder.appendChild(closeButton);
    
    // Add a listener to deal with opening the modal
    el.addEventListener('click', showModal)
    
    // Move the modal holder to the bottom of the document. This prevents screen readers
    // from reading forward beyond the end of the modal. It is unclear if this is
    // necessary as a result of a limitation of screen readers in dealing with
    // elements marked with role='dialog'
    document.getElementsByTagName("body")[0].appendChild(modalHolder);
  });
}).call(this);

// Write less code
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

// Open the modal window
function showModal(e) {
  var modalHolder = getById(this.id + '-holder');

  // Save the open modal window id
  openModalId = this.id;

  // Save the element currently with focus
  focusedElementBeforeModal = document.activeElement;

  // Mark the main content as hidden
  document.getElementsByTagName("main")[0].setAttribute('aria-hidden', 'true');
  
  // Display the overlay
  getById('modal-overlay').style.display = 'block';

  // Display the modal window
  modalHolder.setAttribute('aria-hidden', 'false');
  
  // Add a listener to deal with pressing the escape key to close the window
  document.addEventListener('keydown', escapeKeyToClose);

  // Add a keydown listener to modal to manage the tab key within the modal
  modalHolder.addEventListener('keydown', containTabKey);
  
  // Set focus to the modal window
  modalHolder.focus();
  e.preventDefault();
}

// Close the modal window
function hideModal(e) {
  var modalHolder = getById(openModalId + '-holder');
  
  // Clear the open modal window id
  openModalId = null;

  // Mark the main page as visible
  document.getElementsByTagName("main")[0].setAttribute('aria-hidden', 'false');
  
  // Hide the overlay
  getById('modal-overlay').style.display = 'none';

  // Hide the modal window
  modalHolder.setAttribute('aria-hidden', 'true');

  // Remove the escape key listener
  document.removeEventListener('keydown', escapeKeyToClose);

  // Remove keydown listener to modal to manage the tab key within the modal
  modalHolder.removeEventListener('keydown', containTabKey);

  // Return focus to the opening element
  focusedElementBeforeModal.focus();
  focusedElementBeforeModal = null;
  e.preventDefault();
}

// Contain the tab key within the modal window
function containTabKey(e) {
  // If the tab key is pressed
  if(e.keyCode == 9) {
    var modal = getById(openModalId + '-holder');
    var canTakeFocus = [];
    var focusableNodes = modal.querySelectorAll(focusableElementsString);
    for(var i = focusableNodes.length; i--; canTakeFocus.unshift(focusableNodes[i]));
    var currentFocus = canTakeFocus.indexOf(document.activeElement);
    
    // If the shift key is pressed with tab
    if(e.shiftKey) {
      // If the first tabable item in the modal has focus, cycle round to the last item
      if(currentFocus == 0) {
        canTakeFocus[canTakeFocus.length - 1].focus();
      }
      // Otherwise, go to the previous item
      else {
        canTakeFocus[currentFocus - 1].focus();
      }
    } else {
      // If the last tabable item in the modal has focus, cycle round to the first item
      if(currentFocus == canTakeFocus.length - 1 ) {
        canTakeFocus[0].focus();
      }
      // Otherwise, go to the next item
      else {
        canTakeFocus[currentFocus + 1].focus();
      }
    }
    // We have dealt with the tab function, so do nothing more
    e.preventDefault();
  }
}

// If the escape key is pressed, close any open modal window
function escapeKeyToClose(e) {
  // if escape pressed
  if(e.keyCode == 27) {
    hideModal(e);
    e.preventDefault();
  }
}