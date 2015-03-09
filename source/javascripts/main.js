(function () {
	'use strict';

  // Provide left slide out menu functionality
  var menu = document.querySelectorAll('a.view-menu');
  menu[0].addEventListener('click', function() {
    var elements = document.querySelectorAll('body, #sitenav');
    for( var i=0; i<elements.length; i++) {
      var moveValue = elements[i].style.left === '20em' ? '0em' : '20em';
      Velocity(elements[i], {left: moveValue}, {duration: 300});
    }
  });
}());