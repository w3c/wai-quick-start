(function () {
	'use strict';

  // Note that this is not generalized code for dealing with custom interactive elements
  // and is not recommended for production use
  function flickSwitch(el) {
    if(el.getAttribute('aria-checked') == 'true' ) {
      el.setAttribute('aria-checked', 'false');
      el.getElementsByTagName('span')[0].innerHTML = 'Off';
    } else {
      el.setAttribute('aria-checked', 'true')
      el.getElementsByTagName('span')[0].innerHTML = 'On';
    }
  }

  var switchExample = document.getElementById('switch');
  if(switchExample) {
    switchExample.addEventListener('keydown', function(e) {
      if(e.keyCode && (e.keyCode == 32 || e.keyCode == 13)) {
        flickSwitch(this);
      }
    });
    switchExample.addEventListener('click', function () {
      flickSwitch(this);
    });
  }
}());