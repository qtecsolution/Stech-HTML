// import WebglFuild from 'webgl-fluid';

// WebglFuild(document.querySelector('canvas'), {
//   TRIGGER: 'mousemove', // Can be change to 'click'
// })

// window['webgl-fluid'].default(document.querySelector('canvas'));
	
// document.querySelector('#wrap').addEventListener('mousemove', event => {
//     console.log('move');
//     newEvent = new event.constructor(event.type, event);
//     document.querySelector('canvas').dispatchEvent(newEvent);
// });

// window['webgl-fluid'].default(document.querySelector('canvas'));

// document.querySelector('.stechbanner')
//   .addEventListener('mousemove', event => {
//     console.log('move');
//     newEvent = new event.constructor(
//       event.type, event);
//     document.querySelector('canvas')
//       .dispatchEvent(newEvent);
// });
// document.querySelector('button')
//   .addEventListener('click', event => {
//     console.log('button clicked');
// });
// window['webgl-fluid'].default(document.querySelector('canvas'));
	
// document.querySelector('.stechbanner').addEventListener('mousemove', event => {
//     newEvent = new event.constructor(event.type, event);
//     // document.querySelector('canvas').dispatchEvent(newEvent);
// });

$("#stechbanner").mousemove(function(e) {
  parallaxIt(e, ".banner-3d img", -100);
//   parallaxIt(e, "img", -30);
});

function parallaxIt(e, target, movement) {
  var $this = $("#stechbanner");
  var relX = e.pageX - $this.offset().left;
//   var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    // y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
