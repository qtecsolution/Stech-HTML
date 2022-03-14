// const homebanner = $("#homestechbanner");
// // const aboutbanner = $("#aboutstechbanner");


// if(homebanner.length > 0) {
// 	homebanner.mousemove(function(e) {
// 		parallaxIt(e, ".banner-3d img", -100);
// 		parallaxIt(e, ".banner-3d img", -50);
// 	});
// }



// function parallaxIt(e, target, movement) {
//     let $this = '#homestechbanner';
//     let relX = e.pageX - $this.offset().left;
//     let relY = e.pageY - $this.offset().top;

//     TweenMax.to(target, 1, {
// 		x: (relX - $this.width() / 2) / $this.width() * movement,
// 		y: (relY - $this.height() / 2) / $this.height() * movement
//     });
// }


var scene = document.querySelector('#scene');
var parallaxInstance = new Parallax(scene, {
	relativeInput: true
});
