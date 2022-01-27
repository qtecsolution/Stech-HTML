

// var sticky = header.offsetTop;

// function myFunction() {
//     var header = document.querySelector('.header');
//     const distanceY = window.pageYOffset;
//     const shrinkOn = '566px';
//         console.log(distanceY);

//     if (distanceY > shrinkOn) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// }

// window.addEventListener('scroll', myFunction);

var className = "inverted";
var scrollTrigger = window.innerHeight;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
}
