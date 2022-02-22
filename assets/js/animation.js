// TweenLite.from('.stechdigitalribbon',{y:'100%'})
// var height = new TimelineMax({repeat: 0, yoyo: true, repeatDelay: 2})
// .to('.stechdigitalribbon', 1, {y: '0'})

// TweenLite.from('.stechdigital-title',{x:'-100%'})
// var lines = new TimelineMax({repeat: 0, yoyo: true, repeatDelay: 3})
// .to('.stechdigital-title', 2, {x: '0%'})

gsap.from('.stechdigitalribbon', {
    duration: 2,
    ease: 'linear',
    scaleY: 0,
    opacity: 0,
    yPercent: -10
});

gsap.to('.stechdigitalribbon', {
    scaleY: 1
});

gsap.from('.stechdigital-title', {
    x: '-40',
    duration: 2.25,
    delay: 2.25,
    ease: 'back',
    opacity: 0
});

gsap.to('.stechdigital-title', {
    x: 0
});