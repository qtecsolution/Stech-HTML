// TweenLite.from('.stechdigitalribbon',{y:'100%'})
// var height = new TimelineMax({repeat: 0, yoyo: true, repeatDelay: 2})
// .to('.stechdigitalribbon', 1, {y: '0'})

// TweenLite.from('.stechdigital-title',{x:'-100%'})
// var lines = new TimelineMax({repeat: 0, yoyo: true, repeatDelay: 3})
// .to('.stechdigital-title', 2, {x: '0%'})

gsap.from('.stechdigitalribbon', {
    y: -20,
    scaleY: 0,
    duration: 2,
    ease: 'back',
    stagged: 1
});

gsap.to('.stechdigitalribbon', {
    y: 0,
    scaleY: 1
});

gsap.from('.stechdigital-title', {
    x: '-100%',
    duration: 3,
    delay: 2,
    ease: 'back',
    stagged: 2
});

gsap.to('.stechdigital-title', {
    x: 0
});