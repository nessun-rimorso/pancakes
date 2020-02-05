new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    anchors:['firstPage', 'secondPage']
});



(function() {
    let pageY = 0;
    let mouseMoved = false;
    const animatedPics = Array.from(document.querySelectorAll('.main-page__animated-pic'));

    const onMouseVertical = (e) => {
        if (pageY) {
            if (e.pageY > pageY || e.pageY < pageY) {
                animatePictures();
            }
        }
        pageY = e.pageY;
    };

    const animatePictures = () => {
        if (!mouseMoved) {
            animatedPics.forEach(picture => {
                picture.classList.add('animation');
                mouseMoved = true;
                if (mouseMoved) {
                    setTimeout(() => {
                        picture.classList.remove('animation');
                        mouseMoved = false;
                    }, 500)
                }
            });
        }
    };

    document.addEventListener('mousemove', onMouseVertical)
})();
