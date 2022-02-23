// STECH AESTHETICS ANIMATION START
gsap.from('.darkaestheticsribbon', {
    duration: 0.5,
    ease: 'power2.in',
    scaleY: 0,
    opacity: 0
});

gsap.to('.darkaestheticsribbon', {
    scaleY: 1
});

gsap.from('.stechaesthetics-title', {
    duration: 0.75,
    delay: 0.75,
    y: 40,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.stechaesthetics-title', {
    y: 0
});

gsap.from('.stechaesthetics-text', {
    duration: 1,
    delay: 1,
    y: 20,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.stechaesthetics-text', {
    y: 0
});

// STECH AESTHETICS ANIMATION END

// OUR-CONCERN ANIMATION START
gsap.from('.ourconcernribbon', {
    duration: .5,
    ease: 'power2.in',
    scaleY: 0,
    opacity: 0
});

gsap.to('.ourconcernribbon', {
    scaleY: 1
});

gsap.from('.ourconcern-title', {
    x: '-40',
    duration: .75,
    delay: .75,
    ease: 'back',
    opacity: 0
});

gsap.to('.ourconcern-title', {
    x: 0
});

gsap.from('.ourconcern-text', {
    duration: 1,
    delay: 1,
    y: 40,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.ourconcern-text', {
    y: 0
});

gsap.from('.tab-nav li a', {
    duration: 1.25,
    delay: 1.25,
    x: -40,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.tab-nav li a', {
    x: 0
});

gsap.from('.content-holder', {
    duration: 1.25,
    delay: 1.25,
    x: 40,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.content-holder', {
    x: 0
});

gsap.from('.concern-thumbnail .info', {
    duration: 1.75,
    delay: 1.75,
    y: 40,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.concern-thumbnail .info', {
    y: 0
});
// OUR-CONCERN ANIMATION END
