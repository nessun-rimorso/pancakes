"use strict";

new fullpage('#fullpage', {
  licenseKey: 'YOUR KEY HERE',
  anchors: ['firstPage', 'secondPage']
});

(function () {
  var pageY = 0;
  var mouseMoved = false;
  var animatedPics = Array.from(document.querySelectorAll('.main-page__animated-pic'));

  var onMouseVertical = function onMouseVertical(e) {
    if (pageY) {
      if (e.pageY > pageY || e.pageY < pageY) {
        animatePictures();
      }
    }

    pageY = e.pageY;
  };

  var animatePictures = function animatePictures() {
    if (!mouseMoved) {
      animatedPics.forEach(function (picture) {
        picture.classList.add('animation');
        mouseMoved = true;

        if (mouseMoved) {
          setTimeout(function () {
            picture.classList.remove('animation');
            mouseMoved = false;
          }, 500);
        }
      });
    }
  };

  document.addEventListener('mousemove', onMouseVertical);
})();