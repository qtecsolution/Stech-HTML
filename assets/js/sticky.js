

// var sticky = header.offsetTop;

function myFunction() {
    var header = document.querySelector('.header');
    const distanceY = window.pageYOffset;
    const shrinkOn = '566px';
        console.log(distanceY);

    if (distanceY > shrinkOn) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', myFunction);